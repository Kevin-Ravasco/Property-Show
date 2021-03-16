from django.views.decorators.csrf import csrf_exempt
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response

from .models import AlerProperty, Agent, Contact, PropertyType
from .serializers import AlerPropertySerializer, AgentSerializer, ContactSerializer, PropertyTypeSerializer


@api_view(['GET'])
def overview(request):
    data = {
        '/properties/': 'to get properties list',
        '/properties/<int:id>/' : 'to get property details, lookup field is id',
        '/agents/': 'to get the agents list',
        '/agents/<int:id>/': 'to get a specific agent details',
        '/property-types/': 'to get list of property types'
    }
    return Response(data)


class PropertyList(ListAPIView):
    queryset = AlerProperty.objects.order_by('-timestamp')
    serializer_class = AlerPropertySerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'city', 'location', 'price', 'size', 'property_type', 'status']
    search_fields = ['name', 'city', 'location', 'price', 'size', 'property_type', 'status']


class PropertyDetails(RetrieveAPIView):
    queryset = AlerProperty.objects.all()
    serializer_class = AlerPropertySerializer


class AgentList(ListAPIView):
    queryset = Agent.objects.all().order_by('id')
    serializer_class = AgentSerializer
    filter_backends = [DjangoFilterBackend]
    search_fields = ['name', 'title', 'phone']
    filterset_fields = ['name', 'title', 'phone']


class AgentDetails(RetrieveAPIView):
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer


class PropertyTypesList(ListAPIView):
    queryset = PropertyType.objects.order_by('id')
    serializer_class = PropertyTypeSerializer


class CreateContact(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]


