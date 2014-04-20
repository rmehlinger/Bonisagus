import os
from bson import ObjectId
from gunicorn.six import urlparse
from django.conf import settings
import pymongo
from Core.models import Magus

__author__ = 'Richard'

MONGO_URL = os.environ.get('MONGOHQ_URL')
print(MONGO_URL)

if MONGO_URL:
    # Get a connection
    client = pymongo.MongoClient(MONGO_URL)
    db = client.app24290427
    magi = db.magi
else:
    client = pymongo.MongoClient(settings.MONGO_CLIENT)
    db = client.app24290427
    magi = db.magi
    print(magi)


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