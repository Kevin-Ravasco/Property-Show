from rest_framework.serializers import ModelSerializer

from .models import Agent, AlerProperty, Contact, PropertyType


class AgentSerializer(ModelSerializer):
    class Meta:
        model = Agent
        fields = "__all__"


class PropertyTypeSerializer(ModelSerializer):

    class Meta:
        model = PropertyType
        fields = ['id', 'image', 'name']


class AlerPropertySerializer(ModelSerializer):
    property_type = PropertyTypeSerializer(read_only=True)
    agent = AgentSerializer(read_only=True)

    class Meta:
        model = AlerProperty
        # fields = "__all__"
        exclude = ['timestamp']


class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'website', 'comment']


