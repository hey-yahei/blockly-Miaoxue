#!/usr/bin/python
#-*- coding: utf-8 -*-

from bottle import route, static_file, run, template, request
import subprocess
import platform
import webbrowser
import os
import argparse

# 结束字符串，要跟run.js的定义统一
END_STRING = '----------- End -----------'

coding = 'gbk' if platform.system() == "Windows" else 'utf-8'
running_process = None

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
    global running_process

    if running_process:
        result = running_process.stdout.read().decode(coding)
        if running_process.poll() != None:
            result += "\n" + END_STRING
            running_process = None
        return result.replace("\n", "</br>")
    else:
        return ""

@route("/kill_program")
def kill_program():
    global running_process
    if running_process:
        running_process.terminate()
        running_process = None
    return "ok"

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-nb", "--no-browser", action="store_true", help="not open browser")
    parser.add_argument("-i", "--ip", help="host ip")
    parser.add_argument("-p", "--port", type=int, help="host port")
    parser.add_argument("-d", "--debug", action="store_true", help="open debug swith for bottle")

    args = parser.parse_args()
    params = {
        "host" : args.ip or "localhost",
        "port" : args.port or 1234,
        "debug" : args.debug
    }

    if not args.no_browser:
        webbrowser.open("http://{}:{}".format(params['host'], params['port']))
    run(**params)