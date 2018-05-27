#!/usr/bin/python
#-*- coding: utf-8 -*-

from bottle import route, static_file, run, template, request
import subprocess
import platform
import webbrowser
import os
import argparse

coding = 'gbk' if platform.system() == "Windows" else 'utf-8'

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
    code = request.forms.code
    with open("tmp/code2run.py", "w") as f:
        f.write(code)
        f.write("\nprint('----------- End -----------')")
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

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--no-browser", action="store_true", help="not open browser")
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
        webbrowser.open("http://0.0.0.0:1234")
    run(**params)