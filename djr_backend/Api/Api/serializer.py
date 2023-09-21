from rest_framework.serializers import ModelSerializer
from .models import FormData

class textSerializer(ModelSerializer):
    class Meta:
        model = FormData
        fields = '__all__'

