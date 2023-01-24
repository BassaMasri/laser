from .forms import *
from .models import *

def home_view(request):
    context = {}
    # create object of form
    form = CoinForm(request.POST or None, request.FILES or None)

    # check if form data is valid
    if form.is_valid():
        # save the form data to model
        form.save()

    context['form'] = form
    return render(request, "index.html", context)
