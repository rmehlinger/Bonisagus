import json
from django.http import HttpResponse
from django.shortcuts import render_to_response
from Core.util import ABILITIES_DICTS


def character_create(request):
    if request.method == 'GET':
        return render_to_response('base.html')


def abilities(request):
    return HttpResponse(json.dumps(ABILITIES_DICTS))

def virtues(request):
    return HttpResponse(json.dumps(VIRTUES_DICTS))