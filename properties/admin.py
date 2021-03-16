from django.contrib import admin

from .models import Agent, AlerProperty, Contact, PropertyType


@admin.register(Agent)
class AgentAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'phone']
    list_filter = ['title']
    search_fields = ['name', 'title']


@admin.register(AlerProperty)
class AlerPropertyAdmin(admin.ModelAdmin):
    list_display = ['name', 'city', 'location', 'price', 'size', 'property_type', 'status']
    list_filter = ['status', 'property_type', 'city']
    search_fields = ['name', 'city', 'location']


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'timestamp']
    search_fields = ['name', 'email']


admin.site.register(PropertyType)
