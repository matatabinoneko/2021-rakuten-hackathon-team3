from django.contrib import admin
from .models import User, PreferenceTag, Product, Wishlist

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _


class UserAdmin(BaseUserAdmin):
    ordering = ["id"]
    list_display = ["loginid", "username"]
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (_("Personal Info"), {"fields": ("birthday", "friends", "tags")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                )

            }
        ),
        (_("Important dates"), {"fields": ("last_login",)}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("loginid", "username","firstname", "lastname","zipcode", "address", "password1", "password2","iconimage", "birthday","tags", "friends",)
        }),
    )
# Register your models here.

admin.site.register(User, UserAdmin)

admin.site.register(PreferenceTag)
admin.site.register(Product)
admin.site.register(Wishlist)