from bson import ObjectId
from pymongo import MongoClient
from django.conf import settings
from Core.models import Magus

__author__ = 'Richard'

client = MongoClient(settings.MONGO_CLIENT, settings.MONGO_PORT)
db = client.bonisagus
magi = db.magi


def create_magus(post_dict):
    magus_id = magi.insert(post_dict)
    Magus.objects.create(fs_id=magus_id)
    return magus_id


def update_magus(magus_id, put_dict):
    return magi.update({'_id': ObjectId(magus_id)}, {"$set": put_dict})


def get_magus(magus_id):
    return magi.find_one({'_id': ObjectId(magus_id)}, fields={'_id': False})


def list_magi(**kwargs):
    return magi.find(fields=['_id', 'character_name'])


def delete_magus(magus_id):
    return magi.remove({'_id': ObjectId(magus_id)})