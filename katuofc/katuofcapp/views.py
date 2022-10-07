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
    return render(request, 'facilitamei_dashboard.html')


def facilitamei_sobre(request):
    return render(request, 'facilitamei_sobre.html', {'variavel1': {'Janeiro': 30, 'Fevereiro': 20, 'Dezembro': 90}})


def pp(request):
    return render(request, 'pp.html')
