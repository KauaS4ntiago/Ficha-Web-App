from register import register
from flask import Flask
from database.connection import init_db


app = Flask(__name__)

init_db(app)
register(app)

if __name__ == '__main__': app.run()