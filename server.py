from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from bson.json_util import ObjectId
from API import get_titles 
import pymongo 
import json

class MyEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(MyEncoder, self).default(obj)


app = Flask(__name__)
app.json_encoder = MyEncoder
connection_url = 'mongodb+srv://tdebbad:nPxVq0ck8QWTa752@cluster0.bo6q0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client = pymongo.MongoClient(connection_url) 

Database = client.get_database("database")
media = Database.media

"""
TODO: Verify user input (Make sure they're not trying to be malciious)
"""
@app.route('/titles/', methods=['GET'])
def get_users():
   if request.method == 'GET':
      query = request.args.get('query')

      titles = media.find_one({"name": query})
      if titles == None :
         print("Comes here")
         titles = [title.__dict__ for title in get_titles(query, 1)] # Calls API & Converts to JSON format
         x = media.insert(titles)

      resp = jsonify(titles)
      resp.status_code = 200 
      return resp