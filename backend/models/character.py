from database.connection import db

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        nullable=False
    )

    name = db.Column(
        db.String(100),
        nullable=False
    )
    
    current_hp = db.Column(
        db.SmallInteger,
        nullable=False
    )
    
    max_hp = db.Column(
        db.SmallInteger,
        nullable=False
    )
    
    current_sanity = db.Column(
        db.SmallInteger,
        nullable=False
    )
    
    max_sanity = db.Column(
        db.SmallInteger,
        nullable=False
    )    
    
    defense = db.Column(
        db.SmallInteger,
        nullable=False
    )

    image = db.Column(
        db.String(255)
    )

    notes = db.Column(
        db.Text
    )