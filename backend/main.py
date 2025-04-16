from flask import Flask
from dataset import tb_usuarios, tb_solucoes

app = Flask(__name__)

@app.route('/api')
def index():
    return 'Bem-vindo à API de soluções da LEGAL!'

app.run()
