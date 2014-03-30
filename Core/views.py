import json
from django.core import serializers
from django.core.paginator import Paginator
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, StreamingHttpResponse
from django.shortcuts import render_to_response
from Core import character_manager, util
from Core.util import ABILITIES_DICTS, VIRTUES_DICTS, FLAWS_DICTS

virtues_pages = Paginator(VIRTUES_DICTS, 50)
flaws_pages = Paginator(FLAWS_DICTS, 50)


def base(request):
    if request.method == 'GET':
        return render_to_response('base.html')

@csrf_exempt
def characters(request):
    if request.method == 'GET':
        ret = [{k: str(v) for k,v in mage.items()} for mage in character_manager.list_magi()]
        return StreamingHttpResponse(json.dumps(ret))
    if request.method == 'POST':
        magus = character_manager.create_magus(json.loads(request.body.decode('utf-8')))
        return HttpResponse(magus, content_type='application/json')
    return HttpResponse('no')

@csrf_exempt
def character(request, guid):
    if request.method == 'GET':
        jsoned = character_manager.get_magus(guid)
        return StreamingHttpResponse(json.dumps(jsoned), content_type='application/json')
    elif request.method == 'PUT':
        magus = character_manager.update_magus(guid, json.loads(request.body.decode('utf-8')))
        return StreamingHttpResponse(magus, content_type='application/json')
    elif request.method == 'DELETE':
        magus = character_manager.delete_magus(guid)
        return HttpResponse()


def abilities(request):
    return HttpResponse(json.dumps(ABILITIES_DICTS))


def virtues(request, page_num):
    start = request.GET.get('page', page_num)
    return HttpResponse(json.dumps(virtues_pages.page(start).object_list))


def flaws(request, page_num):
    start = request.GET.get('page', page_num)
    return HttpResponse(json.dumps(flaws_pages.page(start).object_list))

