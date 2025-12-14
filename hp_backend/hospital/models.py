from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    experience = models.IntegerField()
    #photo = models.URLField(blank=True)
    photo = models.ImageField(upload_to="doctors/", blank=True, null=True)


    def __str__(self):
        return self.name


class Appointment(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    department = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return f"{self.name} ({self.department})"


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# Create your models here.
