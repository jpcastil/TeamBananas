class Title:
  def __init__(self, name, titleType, genre, mpa, time, date, plot, IMDBid, poster, triggers):
    self.name = name
    self.titleType = titleType
    self.genre = genre
    self.mpa = mpa
    self.time = time
    self.date = date
    self.plot = plot
    self.IMDBid = IMDBid
    self.poster = poster
    self.triggers = triggers

  def getName(self): 
    return self.name
  
  def getTitleType(self): 
    return self.titleType

  def getGenre(self): 
    return self.genre

  def getMPA(self): 
    return self.mpa

  def getTime(self): 
    return self.time

  def getDate(self): 
    return self.date

  def getPlot(self): 
    return self.plot

  def getIMDDBid(self): 
    return self.IMDBid

  def getPoster(self): 
    return self.poster

  def getTriggers(self): 
    return self.triggers

  def __repr__(self):
    return ("Name: " + self.name + "\n" + 
      "titleType: " + self.titleType + "\n" + 
      "Genre: " + str(self.genre) + "\n" + 
      "MPA: " + self.mpa + "\n" + 
      "Time: " + str(self.time) + "\n" + 
      "Date: " + str(self.date) + "\n" + 
      "Plot: " + self.plot + "\n" +
      "IMDB ID: " + self.IMDBid + "\n" + 
      "Poster: " + self.poster + "\n" +
      "Triggers: " + str(self.triggers)) + "\n"