from rest_framework import viewsets
from rest_framework.response import Response
from .serializer import ClimaSerializer
from .models import Clima


class ClimaViewSet(viewsets.ModelViewSet):
    queryset = Clima.objects.exclude(key__isnull=True).exclude(key__exact='')
    serializer_class = ClimaSerializer

    def list(self, request, *args, **kwargs):
        # Verificar si la 'key' está presente en los parámetros de consulta
        key = request.query_params.get('key', None)

        # Si la 'key' está ausente o es una cadena vacía, devolver un error
        if not key:
            return Response({"error": "Se requiere la 'key' para acceder a este recurso."}, status=400)

        # Si la 'key' está presente y no está vacía, continuar con la solicitud
        return super().list(request, *args, **kwargs)
