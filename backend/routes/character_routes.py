from flask import Blueprint, request, jsonify
from database.connection import db
from models.ability import Ability
from models.attribute import Attribute
from models.skill import Skill
from models.character import Character
from utils.generic_crud import GenericCrud

characters_bp = Blueprint('character',__name__,url_prefix='/characters')

crud = GenericCrud(Character)

#POST - CRIAR
@characters_bp.route('', methods=['POST'])
def create_character():
    try:
        data = request.get_json()

        attributes = data.pop('attributes', [])
        skills = data.pop('skills', [])
        abilities = data.pop('abilities', [])

        character = crud.create(data)

        for attr in attributes:
            attr['character_id'] = character.id
            attribute = Attribute(**attr)
            db.session.add(attribute)

        for skill in skills:
            skill['character_id'] = character.id
            skill_obj = Skill(**skill)
            db.session.add(skill_obj)

        for ability in abilities:
            ability['character_id'] = character.id
            ability_obj = Ability(**ability)
            db.session.add(ability_obj)

        db.session.commit()

        return jsonify({
            "message": "Personagem criado",
            "id": character.id
        }), 201

    except ValueError as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400
        
#GET ALL - RETORNAR TODOS
@characters_bp.route('', methods=['GET'])
def get_characters():

    characters = crud.get_all()

    return jsonify([
        {
            "id": character.id,
            "name": character.name,
            "image": character.image,
            "notes": character.notes,
            "attributes":  [
                {"id": attr.id, "name": attr.name, "value": attr.value}
                for attr in character.attributes
            ],
            "skills": [
                {"id": skill.id, "name": skill.name, "value": skill.value}
                for skill in character.skills
            ],
            "abilities": [
                {"id": ability.id, "image": ability.image, "name": ability.name, "description": ability.description}
                for ability in character.abilities
            ]
        }

        for character in characters
    ])
    
    
#GET ONE - RETORNAR 1 POR ID
@characters_bp.route('/<int:id>', methods=['GET'])
def get_character(id):

    try:

        character = crud.get_by_id(id)

        return jsonify({
            "id": character.id,
            "name": character.name,
            "image": character.image,
            "notes": character.notes,
            "attributes": character.attributes,
            "skills": character.skills,
            "abilities": character.abilities
        })


    except ValueError as e:

        return jsonify({
            "error": str(e)
        }), 404
        
#PUT - ATUALIZAR POR ID
@characters_bp.route('/<int:id>', methods=['PUT'])
def update_character(id):

    try:

        data = request.get_json()

        character = crud.update(
            id,
            data
        )

        return jsonify({
            "message": "Personagem atualizado",
            "id": character.id
        })


    except ValueError as e:

        return jsonify({
            "error": str(e)
        }), 400
     
#DELETE - DELETAR POR ID   
@characters_bp.route('/<int:id>', methods=['DELETE'])
def delete_character(id):

    try:

        crud.delete(id)

        return jsonify({
            "message": "Personagem removido"
        })


    except ValueError as e:

        return jsonify({
            "error": str(e)
        }), 404