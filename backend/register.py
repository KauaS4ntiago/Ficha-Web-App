from routes.user_routes import users_bp
from routes.character_routes import characters_bp
from routes.auth_routes import auth_bp
from routes.attribute_routes import attributes_bp
from routes.skill_routes import skills_bp
from routes.ability_routes import abilities_bp


def register_routes(app):

    app.register_blueprint(users_bp)
    app.register_blueprint(characters_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(attributes_bp)
    app.register_blueprint(skills_bp)
    app.register_blueprint(abilities_bp)