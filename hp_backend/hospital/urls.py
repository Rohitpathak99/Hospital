from django.urls import path
from .views import DoctorList, AppointmentCreate, ContactCreate, AppointmentList

urlpatterns = [
    path("doctors/", DoctorList.as_view()),
    path("appointments/", AppointmentCreate.as_view()),
    path("appointments/all/", AppointmentList.as_view()),
    path("contact/", ContactCreate.as_view()),
]
