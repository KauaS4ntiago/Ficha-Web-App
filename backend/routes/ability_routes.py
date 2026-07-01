from flask import Blueprint, request, jsonify, send_from_directory
from database.connection import db
from models.ability import Ability
from utils.generic_crud import GenericCrud
from utils.file_upload import save_image, UPLOAD_FOLDER
from flask_jwt_extended import jwt_required

abilities_bp = Blueprint('ability', __name__, url_prefix='/abilities')

crud = GenericCrud(Ability)

# POST - CRIAR
@abilities_bp.route('', methods=['POST'])
@jwt_required()
def create_ability():
    try:
        data = request.form.to_dict()

        image_file = request.files.get('image')
        if image_file:
            data['image'] = save_image(image_file, subfolder='abilities')

        ability = crud.create(data)

        return jsonify({
            "message": "Habilidade criada",
            "id": ability.id
        }), 201

    except Exception as e:
        db.session.rollback()
        print(f"Erro interno no Flask: {str(e)}")
        return jsonify({"error": str(e)}), 400

# PUT - ATUALIZAR POR ID
@abilities_bp.route('/<int:id>', methods=['PUT'])
@jwt_required()
def update_ability(id):
    try:
        data = request.form.to_dict()

        image_file = request.files.get('image')
        if image_file:
            data['image'] = save_image(image_file, subfolder='abilities')
        # se não veio imagem nova, 'image' nem entra no dict,
        # então o crud.update() não toca nesse campo

        ability = crud.update(id, data)

        return jsonify({
            "message": "Habilidade atualizada",
            "id": ability.id,
            "name": ability.name,
            "description": ability.description,
            "image": ability.image
        })

    except ValueError as e:
        return jsonify({"error": str(e)}), 400

# DELETE - DELETAR POR ID
@abilities_bp.route('/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_ability(id):
    try:
        crud.delete(id)
        return jsonify({"message": "Habilidade removida"})

    except ValueError as e:
        return jsonify({"error": str(e)}), 404

# GET - SERVIR ARQUIVO DE IMAGEM
@abilities_bp.route('/uploads/<path:filename>', methods=['GET'])
def get_ability_image(filename):
    return send_from_directory(UPLOAD_FOLDER, filename)

