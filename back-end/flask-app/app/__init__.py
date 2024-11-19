from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object('config.Config')

    # Register routes
    from .routes import api
    app.register_blueprint(api)

    return app