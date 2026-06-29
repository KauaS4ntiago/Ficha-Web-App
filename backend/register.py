from routes.user_routes import users_bp
#from routes.character_routes import character_bp


def register_routes(app):

    app.register_blueprint(users_bp)
  #  app.register_blueprint(character_bp)
  
    print(app.url_map)
