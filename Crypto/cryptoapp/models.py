from django.db import models

class Coin(models.Model):
    def __str__(self):
        return self.name
    
    name = models.CharField(max_length=20)
    open = models.CharField(max_length=20)
    close = models.CharField(max_length=20)
    hight = models.CharField(max_length=20)
    low = models.CharField(max_length=20)

    
