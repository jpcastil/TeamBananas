import requests
import json
from Title import Title 

""" param: String of the media name, n integer titles
    Returns: List of Titles, -1 on error 

    TODO: Validate input 
          Verify correct codes 
          Handle Errors from the requests (i.e. What if it is not a 200 status code?)
          Parse request into a list of title objects (NEED to create Class Title First)
"""
def is_valid(obj):
  return "id" in obj and "title" in obj and "titleType" in obj and "runningTimeInMinutes" in obj \
    and "year" in obj and "image" in obj 

""" param: String of the media name, n integer titles
    Returns: List of Titles, -1 on error 
    TODO: Validate input 
          Verify correct codes 
          Handle Errors from the requests (i.e. What if it is not a 200 status code?)
          Parse request into a list of title objects (NEED to create Class Title First)
"""

def search_movie(search_keyword):
  url = "https://imdb8.p.rapidapi.com/title/find"
  querystring = {"q":search_keyword}

  headers = {
    'x-rapidapi-key': "8699824412msh8ef33d085b31646p101875jsnb9404152fe59",
    'x-rapidapi-host': "imdb8.p.rapidapi.com"
  }
  response = requests.request("GET", url, headers=headers, params=querystring)

  if response.status_code != 200: 
    return -1

  res = json.loads(response.text)
  data = [item for item in res['results'] if is_valid(item)]
  obj = data[0]
  name = obj['title']
  return name

def get_titles(name, n): 
  url = "https://imdb8.p.rapidapi.com/title/find"
  querystring = {"q":name}

  headers = {
    'x-rapidapi-key': "8699824412msh8ef33d085b31646p101875jsnb9404152fe59",
    'x-rapidapi-host': "imdb8.p.rapidapi.com"
  }
  response = requests.request("GET", url, headers=headers, params=querystring)

  if response.status_code != 200: 
    return -1

  res = json.loads(response.text)

  data = [item for item in res['results'] if ('titleType' in item and (item['titleType'] == 'movie' or item['titleType'] == 'tvSeries'))]
  titles = []
  i = 0

  while (i < n and i < len(data)): 
    obj = data[i]
    imdbID = obj['id'][7:-1]
    name = obj['title']
    titleType = obj['titleType']
    genre = get_genres(imdbID)
    mpa = get_mpa(imdbID)
    time = obj['runningTimeInMinutes']
    date = obj['year']
    plot = get_plot(imdbID)
    poster = obj['image']['url']
    triggers = get_triggers(imdbID)

    t = Title(name, titleType, genre, mpa, time, date, plot, imdbID, poster, triggers)
    titles.append(t)

    i += 1

  return titles
    
  def convert_to_title(object): 
    return 3

""" param: IMDBID
    Returns: Plot of the title String, -1 on error

    TODO: Validate input 
          What if there isn't plots? What to default return?
          Which plot, if many are returned, should we then return?
"""
def get_plot(imdbID): 
  url = "https://imdb8.p.rapidapi.com/title/get-plots"
  querystring = {"tconst":imdbID}

  headers = {
    'x-rapidapi-key': "8699824412msh8ef33d085b31646p101875jsnb9404152fe59",
    'x-rapidapi-host': "imdb8.p.rapidapi.com"
  }

  response = requests.request("GET", url, headers=headers, params=querystring)
  if response.status_code != 200: 
    return -1

  res = json.loads(response.text) # For some reason this needs to be converted from a string into JSON? Weird.
  return res['plots'][0]['text'] # Default is to return the first plot

""" param: imdb ID string
    Returns: MPAA Rating String, -1 on error
"""
def get_mpa(imdbID): 
  url = "https://imdb8.p.rapidapi.com/title/get-meta-data"
  querystring = {"ids": imdbID,"region":"US"}

  headers = {
    'x-rapidapi-key': "8699824412msh8ef33d085b31646p101875jsnb9404152fe59",
    'x-rapidapi-host': "imdb8.p.rapidapi.com"
  }
  
  response = requests.request("GET", url, headers=headers, params=querystring)
  if response.status_code != 200:
    return -1
  res = json.loads(response.text)
  return res[imdbID]['certificate']

""" param: imdb ID String
    Returns: List of triggers
"""
def get_triggers(imdbID): 
  url = "https://imdb8.p.rapidapi.com/title/get-parental-guide"
  querystring = {"tconst":imdbID}

  headers = {
    'x-rapidapi-key': "8699824412msh8ef33d085b31646p101875jsnb9404152fe59",
    'x-rapidapi-host': "imdb8.p.rapidapi.com"
  }

  response = requests.request("GET", url, headers=headers, params=querystring)
  if response.status_code != 200: 
    return -1 

  res = json.loads(response.text)
  triggers = [item['label'] for item in res['parentalguide']]

  return triggers

"""param: imdbID String
  Returns: List of genres, -1 if error 
""" 

def get_genres(imdbID): 
  url = "https://imdb8.p.rapidapi.com/title/get-genres"
  querystring = {"tconst":imdbID}
  headers = {
      'x-rapidapi-key': "8699824412msh8ef33d085b31646p101875jsnb9404152fe59",
      'x-rapidapi-host': "imdb8.p.rapidapi.com"
      }

  response = requests.request("GET", url, headers=headers, params=querystring)
  if response.status_code != 200: 
    return -1
  res = json.loads(response.text)
  return res

if __name__ == "__main__":
  titles = get_titles("Harry Potter", 3)
  for title in titles: 
    print(title.__dict__)
    print(title)