class Title:
  def __init__(self, name, titleType, genre, mpa, time, date, plot, IMDBid, poster, triggers):
    self.name = name if type(name) == str else "NA"
    self.titleType = titleType if type(titleType) == str else "NA"
    self.genre = genre if type(genre) == list else ["NA"]
    self.mpa = mpa if type(mpa) == str else "NA"
    self.time = time if type(time) == int else 0
    self.date = date if type(time) == int else 0 
    self.plot = plot if type(plot) == str else "NA"
    self.IMDBid = IMDBid if type(IMDBid) == str else "NA"
    self.poster = poster if type(poster) == str else "NA"
    self.triggers = triggers if type(triggers) == list else ["NA"]

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