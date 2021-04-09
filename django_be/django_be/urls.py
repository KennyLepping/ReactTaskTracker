from django.contrib import admin
from django.urls import path, include
from tasks import views

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tasks/', views.TaskList.as_view()),
    path('tasks/<int:pk>/', views.TaskDetail.as_view()),
    path('', include('frontend.urls')),
]

urlpatterns = format_suffix_patterns(urlpatterns)