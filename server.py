#!/usr/bin/python
#-*- coding: utf-8 -*-

from bottle import route, static_file, run, template, request
import subprocess
from threading import Thread, Lock
import platform
import webbrowser

coding = 'gbk' if platform.system() == "Windows" else 'utf-8'

out_lock = Lock()
p = None
def run_thread():
    os.system("python3 tmp/code2run.py")

@route("/<filename:path>")
def static_files(filename):
    return static_file(filename, root="")

@route("/")
def index():
    return template("index.html")

@route("/do_run", method="post")
def do_run():
    code = request.forms.code
    with open("tmp/code2run.py", "w") as f:
        f.write(code)
        f.write("\nprint('python_all_ok')")
    p = subprocess.Popen('python tmp/code2run.py', shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    p.wait()

    result = ""
    for out in p.stdout.readlines():
        result += out.decode(coding)

    return result

# @route("/get_running_status")
# def get_running_status():
#     return str( p.wait(0.1) )

webbrowser.open("http://localhost:1234")
run(host='localhost', port=1234, debug=True)