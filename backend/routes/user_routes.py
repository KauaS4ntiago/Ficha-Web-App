from flask import Blueprint, request, jsonify
from database.connection import db
from models.user import User
from utils.generic_crud import GenericCrud

users_bp = Blueprint('user',__name__,url_prefix='/users')

crud = GenericCrud(User)

#POST - CRIAR
@users_bp.route('', methods=['POST'])
def create_user():

    try:

        data = request.get_json()

        user = crud.create(data)

        return jsonify({
            "message": "Usuário criado",
            "id": user.id
        }), 201


    except ValueError as e:

        return jsonify({
            "error": str(e)
        }), 400
        
#GET ALL - RETORNAR TODOS
@users_bp.route('', methods=['GET'])
def get_users():

    users = crud.get_all()

    return jsonify([
        {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }

        for user in users
    ])
    
    
#GET ONE - RETORNAR 1 POR ID
@users_bp.route('/<int:id>', methods=['GET'])
def get_user(id):

    try:

        user = crud.get_by_id(id)

        return jsonify({
            "id": user.id,
            "name": user.name,
            "email": user.email
        })


    except ValueError as e:

        return jsonify({
            "error": str(e)
        }), 404
        
#PUT - ATUALIZAR POR ID
@users_bp.route('/<int:id>', methods=['PUT'])
def update_user(id):

    try:

        data = request.get_json()

        user = crud.update(
            id,
            data
        )

        return jsonify({
            "message": "Usuário atualizado",
            "id": user.id
        })


    except ValueError as e:

        return jsonify({
            "error": str(e)
        }), 400
     
#DELETE - DELETAR POR ID   
@users_bp.route('/<int:id>', methods=['DELETE'])
def delete_user(id):

    try:

        crud.delete(id)

        return jsonify({
            "message": "Usuário removido"
        })


    except ValueError as e:

        return jsonify({
            "error": str(e)
        }), 404