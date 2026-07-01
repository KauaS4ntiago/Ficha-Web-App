from flask import Blueprint, request, jsonify
from database.connection import db
from models.skill import Skill
from utils.generic_crud import GenericCrud
from flask_jwt_extended import jwt_required

skills_bp = Blueprint('skill', __name__, url_prefix='/skills')

crud = GenericCrud(Skill)

# POST - CRIAR
@skills_bp.route('', methods=['POST'])
@jwt_required()
def create_skill():
    try:
        data = request.get_json()
        skill = crud.create(data)

        return jsonify({
            "message": "Perícia criada",
            "id": skill.id
        }), 201

    except Exception as e:
        db.session.rollback()
        print(f"Erro interno no Flask: {str(e)}")
        return jsonify({"error": str(e)}), 400

# PUT - ATUALIZAR POR ID
@skills_bp.route('/<int:id>', methods=['PUT'])
@jwt_required()
def update_skill(id):
    try:
        data = request.get_json()
        skill = crud.update(id, data)

        return jsonify({
            "message": "Perícia atualizada",
            "id": skill.id,
            "name": skill.name,
            "value": skill.value
        })

    except ValueError as e:
        return jsonify({"error": str(e)}), 400

# DELETE - DELETAR POR ID
@skills_bp.route('/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_skill(id):
    try:
        crud.delete(id)
        return jsonify({"message": "Perícia removida"})

    except ValueError as e:
        return jsonify({"error": str(e)}), 404