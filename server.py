#!/usr/bin/python
#-*- coding: utf-8 -*-

from bottle import route, static_file, run, template, request
import subprocess
import platform
import webbrowser
import os
import json
import codecs

# 结束字符串，要跟run.js的定义统一
END_STRING = '----------- End -----------'

coding = 'gbk' if platform.system() == "Windows" else 'utf-8'
running_process = None
all_result = ""

if not os.path.exists("tmp"):
    print("create a new directory: tmp")
    os.mkdir("tmp")

@route("/<filename:path>")
def static_files(filename):
    return static_file(filename, root="static/")

@route("/")
def index():
    return template("static/index.html")

@route("/do_run", method="post")
def do_run():
    global running_process

    if running_process == None:
        code = request.forms.code
        with open("tmp/code2run.py", "w") as f:
            f.write(code)
        running_process = subprocess.Popen('python tmp/code2run.py', shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        return "ok"
    else:
        return "fail"

@route("/download_python_file", method="post")
def download_python_file():
    code = request.forms.code
    with open("static/tmp/my_project.py", "w") as f:
        f.write(code)
    return ""

@route("/download_xml_file", method="post")
def download_python_file():
    code = request.forms.code
    with open("static/tmp/my_project.xml", "w") as f:
        f.write(code)
    return ""

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

@route("/kill_program")
def kill_program():
    global running_process, all_result
    if running_process:
        running_process.terminate()
        running_process = None
        all_result = ""
    return "ok"

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