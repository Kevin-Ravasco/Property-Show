from django.urls import path

from .views import overview, AgentList, AgentDetails, CreateContact, PropertyList, PropertyDetails, PropertyTypesList


urlpatterns = [
    path('', overview, name='overview'),
    path('properties/', PropertyList.as_view(), name='property_list'),
    path('properties/<int:pk>/', PropertyDetails.as_view(), name='property_details'),
    path('agents/', AgentList.as_view(), name='agent_list'),
    path('agents/<int:pk>/', AgentDetails.as_view(), name='agent_details'),
    path('property-types/', PropertyTypesList.as_view(), name='property_types'),
    path('create-contact/', CreateContact.as_view(), name='create-contact'),
]
