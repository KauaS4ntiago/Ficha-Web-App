from database.connection import db

class Ability(db.Model):
    __tablename__ = 'ability'

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    character_id = db.Column(
        db.Integer,
        db.ForeignKey('characters.id'),
        nullable=False
    )

    name = db.Column(
        db.String(100),
        nullable=False
    )
    
    description = db.Column(
        db.Text
    )

    image = db.Column(
        db.String(255)
    )

    character = db.relationship(
        'Character',
        backref='abilities'
    )