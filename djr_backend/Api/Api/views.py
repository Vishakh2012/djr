from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import FormData
from .serializer import textSerializer
from .model.Model import pred

@api_view(['GET','POST'])
def get_data(request):
    if(request.method == 'GET'):
        formData = FormData.objects.all()
        serializer = textSerializer(data=formData,many=True)
        if(serializer.is_valid()):
            return Response(data=serializer.data,status=status.HTTP_200_OK)
        return Response(data=serializer.data,status=status.HTTP_204_NO_CONTENT)
    elif(request.method == 'POST'):
        data = request.data
        text = data['text']
        print(text)
        l = pred(text)
        return Response({"result" : l},status=status.HTTP_201_CREATED)

