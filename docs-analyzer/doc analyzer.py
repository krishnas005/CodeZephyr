# Import the required libraries

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from summarizer import Summarizer
import spacy
import cv2
import numpy as np
import pytesseract
from transformers import BertTokenizerFast

# Load spaCy model
spcnlp = spacy.load("en_core_web_sm")

# Load BERT Tokenizer
tokenizer = BertTokenizerFast.from_pretrained("bert-base-uncased", max_length=512)

@csrf_exempt
def input_output(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_input = data.get('input', '')

            doc = spcnlp(user_input)
            entity_set = set()

            for ent in doc.ents:
                if ent.label_ in ['GPE', 'ORG', 'WORK_OF_ART', 'EVENT', 'LOC', 'NORP']:
                    entity_set.add(ent.text)

            react_dict = {
                "extra_tags": list(entity_set)
            }

            output = json.dumps(react_dict)
            response_data = {"output": output}
            return JsonResponse(response_data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def summarizer(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_input = data.get('input', '')
            
            bert_model = Summarizer()
            bert_summary = ''.join(bert_model(user_input, min_length=60))
            
            summary = f'{bert_summary}'
            response_data = {'summary': summary}
            return JsonResponse(response_data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def Image_summarizer(request):
    if request.method == 'POST':
        try:
            uploaded_file = request.FILES['image']
            custom_config = r"--oem 3 --psm 11 -c tessedit_char_whitelist='1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz., ' -c preserve_interword_spaces=1"

            # Read the uploaded image data directly from the InMemoryUploadedFile
            image_data = uploaded_file.read()

            # Preprocess the image data
            preprocessed_image = preprocess_image(image_data)

            # Perform OCR on the preprocessed image
            extracted_text = pytesseract.image_to_string(preprocessed_image, config=custom_config)
            
            bert_model = Summarizer()
            bert_summary = ''.join(bert_model(extracted_text, min_length=60))
            
            summary = f'{bert_summary}'
            response_data = {'summary': summary}
            return JsonResponse(response_data)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

# Function to preprocess an image
def preprocess_image(image_data):
    # Decode the image data using OpenCV
    image_array = np.frombuffer(image_data, np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    # Resize the image (optional, but can improve accuracy)
    image = cv2.resize(image, (800, 600))
    
    # Convert to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Apply binary thresholding
    _, binary_image = cv2.threshold(gray_image, 128, 255, cv2.THRESH_BINARY_INV)
    
    # Apply noise reduction using Gaussian blur
    blurred_image = cv2.GaussianBlur(binary_image, (3, 3), 0)
    
    # Enhance contrast using histogram equalization
    equalized_image = cv2.equalizeHist(blurred_image)
    return equalized_image
