from django.contrib import admin
from .models import Doctor, Appointment, Contact

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ("name", "department", "experience")
    search_fields = ("name", "department")

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "department", "date")
    search_fields = ("name", "phone", "department")

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at")
    search_fields = ("name", "email")
