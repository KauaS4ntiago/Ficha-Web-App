from routes.user_routes import users_bp
from routes.character_routes import characters_bp
from routes.auth_routes import auth_bp


def register_routes(app):

    app.register_blueprint(users_bp)
    app.register_blueprint(characters_bp)
    app.register_blueprint(auth_bp)