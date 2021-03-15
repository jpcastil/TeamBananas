from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from bson.json_util import ObjectId
from API import get_titles,search_movie
import pymongo 
import json

class MyEncoder(json.JSONEncoder):
  def default(self, obj):
    if isinstance(obj, ObjectId):
      return str(obj)
    return super(MyEncoder, self).default(obj)

app = Flask(__name__)
CORS(app)

sample_data = [
  {
    "IMDBid": "tt0241527", 
    "_id": "603dbf6b25c254c6f95a99f1", 
    "date": 2001, 
    "genre": [
      "Adventure", 
      "Family", 
      "Fantasy"
    ], 
    "mpa": "PG", 
    "name": "Harry Potter and the Sorcerer's Stone", 
    "plot": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", 
    "poster": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg", 
    "time": 152, 
    "titleType": "movie", 
    "triggers": [
      "nudity", 
      "violence", 
      "profanity", 
      "alcohol", 
      "frightening"
    ]
  }
]

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
      title = search_movie(query)

      if(title == -1):
         return []

      print("Searched for ", title)   

      titles = media.find_one({"name": title})

      if titles == None :
        print("Not in database so adding")
        titles = [title.__dict__ for title in get_titles(query, 1)] # Calls API & Converts to JSON format
        x = media.insert(titles)

      resp = jsonify(titles)
      resp.status_code = 200 
      return resp