from django.contrib import admin
from .models import Quiz

# Register your models here.

class QuizAdmin(admin.ModelAdmin) :
    list = ('name','earned')

    admin.site.register(Quiz)
