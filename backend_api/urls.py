from backend_api.views import QuizViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'quizes',views.QuizViewSet,basename='quiz')
urlpatterns = router.urls
