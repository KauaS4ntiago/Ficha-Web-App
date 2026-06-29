from routes.user_routes import users_bp
from routes.character_routes import characters_bp


def register_routes(app):

    app.register_blueprint(users_bp)
    app.register_blueprint(characters_bp)
  
    print(app.url_map)
