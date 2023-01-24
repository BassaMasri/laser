from django.db import models

class Coin(models.Model):
    open = models.CharField(max_length=20)
    close = models.CharField(max_length=20)
    hight = models.CharField(max_length=20)
    low = models.CharField(max_length=20)
    volume = models.CharField(max_length=20)
