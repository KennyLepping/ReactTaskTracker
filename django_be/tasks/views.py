# from tasks.permissions import IsOwnerOrReadOnly
from django.contrib.auth.models import User
from rest_framework import generics, permissions, views, viewsets

from .models import Task
from .serializers import TaskSerializer, UserSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


