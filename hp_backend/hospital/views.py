from rest_framework import generics
from .models import Doctor, Appointment, Contact
from .serializers import DoctorSerializer, AppointmentSerializer, ContactSerializer

class DoctorList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class AppointmentCreate(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentList(generics.ListAPIView):
    queryset = Appointment.objects.all().order_by("-id")
    serializer_class = AppointmentSerializer

class ContactCreate(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

# Create your views here.
