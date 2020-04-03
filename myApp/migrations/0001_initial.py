# Generated by Django 2.2.10 on 2020-04-02 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(null=True)),
                ('email', models.TextField(null=True)),
                ('question', models.TextField(null=True)),
            ],
            options={
                'verbose_name': 'Contact',
                'db_table': 'Contact',
            },
        ),
    ]
