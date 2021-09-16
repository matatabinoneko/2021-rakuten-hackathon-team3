from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid

class UserManager(BaseUserManager):

    def create_user(self, loginid, password, **extra_fields):
        user = self.model(
            loginid = loginid,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, loginid, password, **extra_fields):
        user = self.create_user(
            loginid=loginid,
            password=password,
            **extra_fields
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
    loginid = models.CharField(max_length=32, unique=True, blank=False)
    username = models.CharField(max_length=255, blank=False)
    firstname = models.CharField(max_length=16, blank=False)
    lastname = models.CharField(max_length=16, blank=False)
    iconimage = models.ImageField(null=True, blank=True, upload_to=load_path_icon)
    birthday = models.DateField(blank=False, default="1997-02-07")
    zipcode = models.CharField(max_length=8,blank=False)
    address = models.CharField(max_length=255, blank=False)
    friends = models.ManyToManyField("self", blank=True, symmetrical=False)
    tags = models.ManyToManyField("PreferenceTag", blank=True)
    is_recommend = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "loginid"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username


TAGS_ICHBA = ((1, 'レディースファッション',),(2, 'メンズファッション') , (3,'インナー・下着・ナイトウェア'), (4,'バッグ・小物・ブランド雑貨'), (5,'靴'),
 (6, '腕時計'),(7,'ジュエリー・アクセサリー'), (8, 'キッズ・ベビー・マタニティ'), (9,'おもちゃ'), (10,'スポーツ・アウトドア'), (11,'家電'), (12,'TV・オーディオ・カメラ'),
 (13, 'パソコン・周辺機器'), (14,'スマートフォン・タブレット') , (15, '光回線・モバイル通信'), (16,'食品'), (17, 'スイーツ・お菓子'), (18, '水・ソフトドリンク'),
 (19, 'ビール・洋酒'), (20, '日本酒・焼酎') ,(21, 'インテリア・寝具・収納'), (22, '日用品雑貨・文房具・手芸'), (23, 'キッチン用品・食器・調理器具'), (24, '本・雑誌・コミック'),
  (25, 'CD・DVD'), (26, 'テレビゲーム'), (27, 'ホビー'), (28, '楽器・音響機器'), (29, '車・バイク'), (30, '車用品・バイク用品'), (31, '美容・コスメ・香水'), (32, 'ダイエット・健康')
  ,(33, '医薬品・コンタクト・介護'), (34, 'ペット・ペットグッズ'), (35, '花・ガーデン・DIY'), (36, 'サービス・リフォーム'), (37, '住宅・不動産'), (38, 'カタログギフト・チケット'), (39, '百貨店・総合通販・ギフト'))
class PreferenceTag(models.Model):
    name = models.IntegerField(choices=TAGS_ICHBA, default=1, unique=True)
    def __str__(self):
        return self.get_name_display()


class Product(models.Model):
    name = models.CharField(max_length=255, blank=False)
    tags = models.ManyToManyField("PreferenceTag")
    url = models.CharField(max_length=255, blank=False)
    price = models.IntegerField(null=True, blank=True)
    def __str__(self):
        return self.name

class Wishlist(models.Model):
    name = models.CharField(max_length=255, blank=False)
    # ユーザーとウィッシュリストは1対多(ユーザーは複数のウィッシュリストを持つ)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField("Product")
    def __str__(self):
        return self.name

