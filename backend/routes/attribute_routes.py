from flask import Blueprint, request, jsonify
from models.attribute import Attribute
from utils.generic_crud import GenericCrud
from flask_jwt_extended import jwt_required

attributes_bp = Blueprint('attribute', __name__, url_prefix='/attributes')

crud = GenericCrud(Attribute)

# PUT - ATUALIZAR POR ID
@attributes_bp.route('/<int:id>', methods=['PUT'])
@jwt_required()
def update_attribute(id):
    try:
        data = request.get_json()
        attribute = crud.update(id, data)

        return jsonify({
            "message": "Atributo atualizado",
            "id": attribute.id,
            "name": attribute.name,
            "value": attribute.value
        })

    except ValueError as e:
        return jsonify({"error": str(e)}), 400