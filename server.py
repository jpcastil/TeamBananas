from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
from API import get_titles 

app = Flask(__name__)

"""
TODO: Verify user input (Make sure they're not trying to be malciious)
"""
@app.route('/titles/', methods=['GET'])
def get_users():
   if request.method == 'GET':
      query = request.args.get('query')
      titles = [title.__dict__ for title in get_titles(query, 1)] # Calls API & Converts to JSON format
      resp = jsonify(titles)
      resp.status_code = 200 
      return resp