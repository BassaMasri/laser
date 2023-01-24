from django import forms
from .models import *


class CoinForm(forms.ModelForm):
    class Meta:
        model = Coin
        fields = "__all__"
