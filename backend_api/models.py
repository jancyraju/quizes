from django.db import models

# Create your models here.
class Quiz(models.Model):
    name = models.CharField(max_length=250)
    password = models.CharField(max_length=8)
    # earned = models.CharField(max_length=250)

    def __str__(self):
        return self.name