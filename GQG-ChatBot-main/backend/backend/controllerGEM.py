import google.generativeai as genai

def get_answer(user_input):
    
    GOOGLE_API_KEY='AIzaSyD04Ap2sE9Dx4LPGiP1y5ldqZNIfgaT-DY'

    genai.configure(api_key=GOOGLE_API_KEY)

    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(f'''
                                    Always answer in a polite manner. Always answer based on the Indian.
                                    Your question will be : {user_input}''')
    return response.text

