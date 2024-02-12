from rest_framework import serializers
from .models import Clima


class ClimaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clima
        fields = '__all__'  # ('campo1','campo2')
