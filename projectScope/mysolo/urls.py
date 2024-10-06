from django.urls import path
from .views import ProjectScope,Login, BecomePartner, HireWriter 


urlpatterns = [
    path('',ProjectScope,name='home' ),
    path('log_in', Login, name='login'),
    path('become_partner', BecomePartner, name='become'),
    path('hire_writer', HireWriter, name='hire'),

]