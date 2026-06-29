from flask import Flask

from database.connection import init_db, db
from register import register_routes


app = Flask(__name__)

init_db(app)

with app.app_context():
    db.create_all()

register_routes(app)


if __name__ == '__main__':
    print(" APP ATIVO: SERVER INICIADO")
    app.run(
        debug=True
    )