from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid

class UserManager(BaseUserManager):

    def create_user(self, email, username, birthday, password, **extra_fields):

        user = self.model(
            email = self.normalize_email(email),
            username = username,
            birthday = birthday,
            **extra_fields
        )
        #user = self.model(email=self.normalize_email(email), **extra_fields)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, birthday, password):
        user = self.create_user(
            email,
            username = username,
            password=password,
            birthday=birthday,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

def load_path_icon(instance, filename):
    ext = filename.split(".")[-1]
    return '/'.join(["icon", str(instance.loginid) + str(ext)])

class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(default=uuid.uuid4,
                            primary_key=True, editable=False)
    loginid = models.CharField(max_length=32, unique=True)
    username = models.CharField(max_length=255,unique=True)
    fistname = models.CharField(max_length=16, blank=False)
    lastname = models.CharField(max_length=16, blank=False)
    iconimage = models.ImageField(blank=True, upload_to=load_path_icon)
    birthday = models.DateField(blank=False)
    address = models.OneToOneField("Address", blank=False, on_delete=models.CASCADE)
    friends = models.ManyToManyField("self", blank=True, symmetrical=False)
    wishlists = models.ForeignKey("Wishlist", blank=True, null=True, on_delete=models.CASCADE)
    tags = models.ManyToManyField("PreferenceTag", blank=True)
    is_selected = models.BooleanField(default=False)
    is_recommend = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email", "birthday"]
    def __str__(self):
        return self.username

class Address(models.Model):
    zip_code = models.CharField(verbose_name='postal code',max_length=8,blank=True,)
    address1 = models.CharField(verbose_name='prefecture',max_length=40,blank=True,)
    address2 = models.CharField(verbose_name='city address',max_length=40,blank=True,)
    address3 = models.CharField(verbose_name='buildings',max_length=40,blank=True,)
    
class PreferenceTag(models.Model):
    name = models.CharField(max_length=255, blank=False)
    # users = models.ManyToManyField("User")

class Product(models.Model):
    name = models.CharField(max_length=255, blank=False)
    wishlists = models.ManyToManyField("Wishlist")
    tags = models.ManyToManyField("PreferenceTag")
    url = models.CharField(max_length=255, blank=False)

class Wishlist(models.Model):
    name = models.CharField(max_length=255, blank=False)
    # ユーザーとウィッシュリストは1対多(ユーザーは複数のウィッシュリストを持つ)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField("Product")

