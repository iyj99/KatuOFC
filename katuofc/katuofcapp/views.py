from html.entities import name2codepoint
from django.shortcuts import render, redirect
from django.core.files.storage import FileSystemStorage
import os
import json
from katuofc.katuofcapp import core

# Create your views here.


def index(request):
    return render(request, 'index.html')


def facilitamei_index(request):
    return render(request, 'facilitamei_index.html')


def facilitamei_dashboard(request):
    variavel1 = {"a": 100, "b": 200}
    variavel2 = json.dumps(variavel1, indent=4, default=str, ensure_ascii=False)
    return render(request, 'facilitamei_dashboard.html', {'variavel1': variavel1, 'variavel2': variavel2})


def facilitamei_sobre(request):
    return render(request, 'facilitamei_sobre.html')


def pp(request):
    return render(request, 'pp.html')
