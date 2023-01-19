# from django.shortcuts import render
# from .models import Quiz
# from .serializers import QuizSerializer
# from rest_framework import viewsets
# # Create your views here.


# class QuizViewSet(viewsets.ModelViewSet):
#     serializer_class = QuizSerializer
#     queryset= Quiz.objects.all()



from django.contrib.auth import authenticate, login
from django.http import JsonResponse

def login_view(request):
    if request.method == 'POST':
        # Get the email and password from the request
        name = request.POST.get('name')
        password = request.POST.get('password')
        # Authenticate the user
        user = authenticate(request, name=name, password=password)
        if user is not None:
            # Log the user in
            login(request, user)
            # Return a success response
            return JsonResponse({'status': 'success'})
        else:
            # Return an error response
            return JsonResponse({'status': 'error', 'message': 'Invalid email or password'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request method'})