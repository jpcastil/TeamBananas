# TeamBananas
Prototype Link: https://www.figma.com/file/ynfC6G4ATs6KJ7PlKl7i4D/Prototype?node-id=1%3A3

A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas

Documentation 

Title.py
  Allows for the representation of a title (movie or tv series)

  Has Following Attributes 
  
    Attribute   Type              Getter Function)

    name        String            getName 
    titleType   String            getTitleType
    genre       List of Strings   getGenre
    mpa         String            getMPA
    time        Int               getTime
    date        Int               getDate
    plot        String            getPlot
    imdbID      String            getIMDBid
    poster      String            getPoster
    triggers    List of Strings   getTriggers

API.py 
    Contains one public method: getTitles(String: query, Int: n)
    
    Parameters:   
      String  query  - This is the front-end search input from the user 
      Int     n      - This allows you to specify how many titles you want back 

    The function accesses the IMDB API and returns a List of Title Objects.  

    Sample Usage: 

    ###################################
    
    from API import get_titles

    titles = get_titles("Harry Potter", 3)
    for title in titles: 
      print(title)

    ################################## 

    Console Output: 

    Name: Harry Potter and the Sorcerer's Stone
    titleType: movie
    Genre: ['Adventure', 'Family', 'Fantasy']
    MPA: PG
    Time: 152
    Date: 2001
    Plot: An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.
    IMDB ID: tt0241527
    Poster: https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg
    Triggers: ['nudity', 'violence', 'profanity', 'alcohol', 'frightening']

    Name: Harry Potter and the Deathly Hallows: Part 2
    titleType: movie
    Genre: ['Adventure', 'Drama', 'Fantasy', 'Mystery']
    MPA: PG-13
    Time: 130
    Date: 2011
    Plot: Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.
    IMDB ID: tt1201607
    Poster: https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg
    Triggers: ['nudity', 'violence', 'profanity', 'alcohol', 'frightening']

    Name: Harry Potter and the Goblet of Fire
    titleType: movie
    Genre: ['Adventure', 'Family', 'Fantasy', 'Mystery']
    MPA: PG-13
    Time: 157
    Date: 2005
    Plot: Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.
    IMDB ID: tt0330373
    Poster: https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg
    Triggers: ['nudity', 'violence', 'profanity', 'alcohol', 'frightening']
    
    #######################################

server.py 
  Make sure to set environment variables: 
  export FLASK_APP=server.py
  export FLASK_ENV=development  
  
  Then, 
  flask run OR python -m flask run 

  Sample GET call for "Harry Potter"

  http://127.0.0.1:5000/titles?query=Harry%20Potter
