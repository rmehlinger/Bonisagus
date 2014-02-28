from django.shortcuts import render, render_to_response

# Create your views here.


def character_create(request):
    if request.method == 'GET':
        return render_to_response('character_creation.html')