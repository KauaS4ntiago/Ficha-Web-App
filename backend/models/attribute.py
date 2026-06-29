from database.connection import db

class Attribute(db.Model):
    __tablename__ = 'attribute'

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
        db.String(50),
        nullable=False
    )

    value = db.Column(
        db.Integer,
        nullable=False
    )

    __table_args__ = (
        db.CheckConstraint(
            'value BETWEEN -4 AND 5'
        ),
    )

    character = db.relationship(
        'Character',
        backref='attributes'
    )