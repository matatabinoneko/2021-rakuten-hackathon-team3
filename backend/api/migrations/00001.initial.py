import api.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('loginid', models.CharField(max_length=32, unique=True)),
                ('username', models.CharField(max_length=255)),
                ('firstname', models.CharField(max_length=16)),
                ('lastname', models.CharField(max_length=16)),
                ('iconimage', models.ImageField(blank=True, upload_to=api.models.load_path_icon)),
                ('birthday', models.DateField(default='1997-02-07')),
                ('zipcode', models.CharField(max_length=8)),
                ('address', models.CharField(max_length=255)),
                ('is_recommend', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('friends', models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PreferenceTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.IntegerField(choices=[(1, 'レディースファッション'), (2, 'メンズファッション'), (3, 'インナー・下着・ナイトウェア'), (4, 'バッグ・小物・ブランド雑貨'), (5, '靴'), (6, '腕時計'), (7, 'ジュエリー・アクセサリー'), (8, 'キッズ・ベビー・マタニティ'), (9, 'おもちゃ'), (10, 'スポーツ・アウトドア'), (11, '家電'), (12, 'TV・オーディオ・カメラ'), (13, 'パソコン・周辺機器'), (14, 'スマートフォン・タブレット'), (15, '光回線・モバイル通信'), (16, '食品'), (17, 'スイーツ・お菓子'), (18, '水・ソフトドリンク'), (19, 'ビール・洋酒'), (20, '日本酒・焼酎'), (21, 'インテリア・寝具・収納'), (22, '日用品雑貨・文房具・手芸'), (23, 'キッチン用品・食器・調理器具'), (24, '本・雑誌・コミック'), (25, 'CD・DVD'), (26, 'テレビゲーム'), (27, 'ホビー'), (28, '楽器・音響機器'), (29, '車・バイク'), (30, '車用品・バイク用品'), (31, '美容・コスメ・香水'), (32, 'ダイエット・健康'), (33, '医薬品・コンタクト・介護'), (34, 'ペット・ペットグッズ'), (35, '花・ガーデン・DIY'), (36, 'サービス・リフォーム'), (37, '住宅・不動産'), (38, 'カタログギフト・チケット'), (39, '百貨店・総合通販・ギフト')], default=1, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('url', models.CharField(max_length=255)),
                ('tags', models.ManyToManyField(to='api.PreferenceTag')),
            ],
        ),
        migrations.CreateModel(
            name='Wishlist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('products', models.ManyToManyField(to='api.Product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='tags',
            field=models.ManyToManyField(blank=True, to='api.PreferenceTag'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]

