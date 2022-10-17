import ast
import json
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'calculator/index.html')

def calculate(request):
    equation = json.loads(request.POST.get('equation', ''))
    return HttpResponse(eval(' '.join(equation)))

