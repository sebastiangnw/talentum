from django.db import models

# Create your models here.


class Clima(models.Model):
    temperatura = models.CharField(max_length=100)
    humedad = models.CharField(max_length=50)
    velocidad_viento = models.FloatField()
    ciudad = models.CharField(max_length=50)
    fecha = models.CharField(max_length=50)
    key = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        if self.key:
            return f"{self.ciudad} - {self.key}"
        else:
            return f"{self.ciudad}"
