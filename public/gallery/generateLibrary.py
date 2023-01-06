# Nothing to see here :)

import os

directory = os.fsencode('.')

gallery = "export const beforeAfterPhotos = [\n"
for file in os.listdir(directory):
  filename = os.fsdecode(file)
  print(filename)
  if filename[:6] == "before":
    name = filename[6:]
    type = ""
    for possibleType in ["Bathroom", "Kitchen", "Repairs"]:
      if possibleType in filename:
        type = possibleType
        break
    gallery += "{\n'category': '" + type + "',\n'before': 'before" + name + "',\n'after': 'after" + name + "'\n},\n"
gallery = gallery + "]"

file = open("gallery.txt", "w+")
file.write(gallery)
file.close()
