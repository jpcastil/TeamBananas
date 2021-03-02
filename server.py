from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from API import get_titles 

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

"""
TODO: Verify user input (Make sure they're not trying to be malciious)
"""
@app.route('/titles/', methods=['GET'])
def get_users():
   if request.method == 'GET':
      """ ONLY FOR TESTING """
      resp = jsonify(sample_data)
      resp.status_code = 200
      return resp
      """ END OF TESTING SECTION 

      query = request.args.get('query')

      api_call = get_titles(query, 1)
      
      if api_call == -1: 
         resp = jsonify([])
         resp.status_code = 404
      else: 
         resp = jsonify([title.__dict__ for title in api_call])
         resp.status_code = 200

      return resp"""