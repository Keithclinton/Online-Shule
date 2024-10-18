from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def signup(request):
    return render(request, 'main/signup.html')

def signin(request):
    return render(request, 'main/signin.html')

def home(request):
    return render(request, 'main/home.html')

def courses(request):
    return render(request, 'main/courses.html')