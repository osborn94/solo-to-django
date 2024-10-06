from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def ProjectScope(request):
    # return HttpResponse('welcome to my home')
    return render(request, "pages/index.html")

def Login(request):
    return render(request, "pages/login.html")

def BecomePartner(request):
    return render(request, "pages/becomePartner.html")

def HireWriter(request):
    return render(request, "pages/hire_writer.html")

# Create your views here.
