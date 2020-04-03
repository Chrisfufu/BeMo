from django.db import models
from django.contrib.auth.models import User
from django.utils.crypto import get_random_string
import uuid
# Create your models here.


# examples:
class Contact(models.Model):
    name = models.TextField(null=True)
    email = models.TextField(null=True)
    question = models.TextField(null=True)
    class Meta:
        verbose_name = "Contact"
        db_table = "Contact"
