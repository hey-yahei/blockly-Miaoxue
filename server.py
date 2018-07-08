#!/usr/bin/python
#-*- coding: utf-8 -*-

from bottle import route, static_file, run, template, request   # web服务器
import subprocess   # 子进程，用于临时运行py文件
import platform     # 平台检测，区分所用编码
import webbrowser   # 浏览器模块，用于启动浏览器
import os
import json         # 解析configure.json
import codecs       # codecs.open打开文件时指定编码

# 结束字符串，要跟run.js的定义统一
END_STRING = '----------- End -----------'

coding = 'gbk' if platform.system() == "Windows" else 'utf-8'
running_process = None
all_result = ""

# 确保存在tmp目录
if not os.path.exists("tmp"):
    print("create a new directory: tmp")
    os.mkdir("tmp")

# 静态资源
@route("/<filename:path>")
def static_files(filename):
    return static_file(filename, root="static/")

# 主页
@route("/")
def index():
    return template("static/index.html")

# 运行py文件（由“运行”按钮触发）
@route("/do_run", method="post")
def do_run():
    global running_process

    if running_process == None:
        code = request.forms.code
        with codecs.open("tmp/code2run.py", "w", "utf-8") as f:
            f.write("#!/usr/bin/python\n#-*- coding: utf-8 -*-\n\n")
            f.write(code)
        running_process = subprocess.Popen('python tmp/code2run.py', shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        return "ok"
    else:
        return "fail"

# 下载py文件（由“保存py”按钮触发）
@route("/download_python_file", method="post")
def download_python_file():
    code = request.forms.code
    with open("static/tmp/my_project.py", "w") as f:
        f.write(code)
    return ""

# 下载xml文件（由“保存xml”按钮触发）
@route("/download_xml_file", method="post")
def download_python_file():
    code = request.forms.code
    with open("static/tmp/my_project.xml", "w") as f:
        f.write(code)
    return ""

# 获取py运行状态（模态框定期请求获取状态）
@route("/get_running_state")
def get_running_state():
    global running_process, all_result

    if running_process:
        result = running_process.stdout.readline().decode(coding)
        all_result += result
        if running_process.poll() != None:
            result += running_process.stdout.read().decode(coding)
            result += "\n" + END_STRING
            running_process.terminate()
            running_process = None
            all_result = ""
        return result
    else:
        return ""

# kill运行中的py（由“终止程序”按钮触发）
@route("/kill_program")
def kill_program():
    global running_process, all_result
    if running_process:
        running_process.terminate()
        running_process = None
        all_result = ""
    return "ok"

# 获取py运行状态（页面初次加载时触发）
@route("/load_states")
def load_states():
    global running_process, all_result
    if running_process:
        return all_result
    else:
        return ""

if __name__ == "__main__":
    with codecs.open("conf/configure.json", 'r', "utf-8") as f:
        params = json.load(f)
    if not params['no-browser']:
        webbrowser.open("http://{}:{}".format(params['ip'], params['port']))
    run(host=params['ip'], port=params['port'], debug=params['debug'])