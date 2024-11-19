# Používame oficiálny Python obraz
FROM python:3.9-slim

# Nastavujeme pracovný adresár
WORKDIR /app

# Kopírujeme requirements.txt a inštalujeme závislosti
COPY requirements.txt .
RUN pip install -r requirements.txt

# Kopírujeme zvyšok aplikácie
COPY . .

# Nastavíme environmentálne premenné pre Flask
ENV FLASK_APP=app.py
ENV FLASK_ENV=production

# Otvoríme port Flask aplikácie
EXPOSE 5000

# Spustíme Flask aplikáciu
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
