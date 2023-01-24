from .models import *
from django.contrib import admin


class CoinAdmin(admin.ModelAdmin):
    list_display = ['open', 'close', 'hight', 'low']

admin.site.register(Coin, CoinAdmin)