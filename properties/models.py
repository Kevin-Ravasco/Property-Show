from django.db import models

STATUS = (
    ('For Rent', 'For Rent'),
    ('For Sale', 'For Sale')
)


def agent_image_upload_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/agents/<agent_name>/
    return 'agents/{}/'.format(instance.name)


def property_image_upload_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/agents/<agent_name>/
    return 'properties/{}/'.format(instance.name)


class Agent(models.Model):
    image = models.ImageField(upload_to=agent_image_upload_directory_path)
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    phone = models.CharField(max_length=14)
    description = models.TextField()

    def __str__(self):
        return self.name


class PropertyType(models.Model):
    image = models.ImageField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class AlerProperty(models.Model):
    image1 = models.ImageField(upload_to=property_image_upload_directory_path)
    image2 = models.ImageField(blank=True, null=True, upload_to=property_image_upload_directory_path)
    image3 = models.ImageField(blank=True, null=True, upload_to=property_image_upload_directory_path)
    floor_plan = models.ImageField(upload_to=property_image_upload_directory_path, blank=True, null=True)
    name = models.CharField(max_length=100)
    property_type = models.ForeignKey(PropertyType, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=9, choices=STATUS)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    city = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    description = models.TextField()
    size = models.IntegerField()
    rooms = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    parking = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Properties"


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    website = models.CharField(max_length=200, blank=True, null=True)
    comment = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name






