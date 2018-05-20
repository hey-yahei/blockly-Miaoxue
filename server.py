#!/usr/bin/python
#-*- coding: utf-8 -*-

from bottle import route, static_file, run, template

@route("/<filename:path>")
def static_files(filename):
    return static_file(filename, root="")

@route("/")
def index():
    return template("index.html")

run(host='localhost', port=1234, debug=True)