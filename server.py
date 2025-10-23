
from livereload import Server

server = Server()
server.watch("css/style.css")
server.watch("index.html")
server.watch("js/script.js")
server.serve(port=8000, host="localhost", root=".")
