from flask import Flask, make_response, jsonify, request
from dataset import tb_usuarios, tb_solucoes
from flask_cors import CORS

app = Flask(__name__)

# Habilita a CORS para todas as origens
CORS(app)

app.config['JSON_SORT_KEYS'] = False

@app.route('/api')
def index():
    return 'Bem-vindo à API de soluções da LEGAL!'

# === FUNCOES DE SOLUCOES ===

@app.route('/api/solucoes', methods=['GET'])
def get_solucoes():
    return make_response(
        jsonify(tb_solucoes), 200
    )
    
@app.route('/api/solucoes/<int:id>', methods=['GET'])
def get_solucao(id):
    for solucao in tb_solucoes:
        if solucao['id'] == id:
            return make_response(
                jsonify(solucao),200
            )

@app.route('/api/solucao', methods=['POST'])
def get_solucao():
    user = tb_usuarios[tb_usuarios.__len__() - 1]
    for solucao in tb_solucoes:
        if solucao['id'] == user['interesse_id']:
            return make_response(
                jsonify(solucao),200
            )

# === FUNCOES DE USUARIOS ===

@app.route('/api/usuarios', methods=['POST'])    
def set_usuario():
    user = request.json
    if user == None:
        return make_response(
            jsonify({'message': 'Não foi possível cadastrar o usuário'}), 400
        )
    tb_usuarios.append(user)
    return make_response(
        jsonify(user), 200
    )
    
@app.route('/api/usuarios', methods=['GET'])
def get_usuarios():
    return make_response(
        jsonify(tb_usuarios), 200
    )

app.run()
