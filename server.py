#!/usr/bin/python
#-*- coding: utf-8 -*-

from bottle import route, static_file, run, template, request
import subprocess
import platform
import webbrowser

coding = 'gbk' if platform.system() == "Windows" else 'utf-8'

@route("/<filename:path>")
def static_files(filename):
    return static_file(filename, root="static/")

@route("/")
def index():
    return template("static/index.html")

@route("/do_run", method="post")
def do_run():
    code = request.forms.code
    with open("tmp/code2run.py", "w") as f:
        f.write(code)
        f.write("\nprint('----------- finished -----------')")
    p = subprocess.Popen('python tmp/code2run.py', shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    p.wait()

    result = ""
    for out in p.stdout.readlines():
        result += out.decode(coding)

    return result

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

# @route("/get_running_status")
# def get_running_status():
#     return str( p.wait(0.1) )

webbrowser.open("http://localhost:1234")
run(host='localhost', port=1234, debug=True)