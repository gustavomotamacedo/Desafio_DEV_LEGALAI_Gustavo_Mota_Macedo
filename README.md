# Desafio Prático LEGAL

> Mini MVP de Match Inteligente (Fictício)

O repositório está organizado em duas pastas:
- Frontend: Feito com Angular
- Backend: Feito com Flask, uma biblioteca Python para criar APIs

---

## Estrutura dos projetos

---

### Frontend

O proejeto fica organizado na pasta `src` e seu output é gerado na pasta `dist`.
A arquitetura da pasta `src` é a seguinte:

app
    ├───form
    └───solution
└───index.html
└───main.tx
└───style.scss

Os arquivos na pasta `app` são os componentes do projeto, que são:
- `form`: Componente que contém o formulário de resposta
- `solution`: Componente que contém a solução correspondente ao usuário

Para estilizar a página foi usado Scss e Bootstrap, a fim de agilizar o processo.

Para executar o projeto localmente, basta executar os seguintes comandos em seu terminal, na pasta raiz do projeto:

```bash
$ npm install
$ npm run start
```

---

### Backend

Dentro da pasta `backend` está o arquivo `app.py`, que é o arquivo principal do projeto. Além dele, temos o arquivo `dataset.py` que representa o banco de dados para armazenar usuários e as soluções da empresa, juntamente com as respostas desses usuários. Essa estratégia foi adotada para facilitar a implementação do MVP, já que não há necessidade de um banco de dados relacional.

Para executar o projeto localmente, basta executar os seguintes comandos em seu terminal, na pasta raiz do projeto:

```bash
$ ./venv/Scripts/activate
$ pip install -r requirements.txt
$ waitress-serve --host 127.0.0.1 app:app
```

---

> A execução do backend e do frontend devem ser feitas em terminais distintos e em paralelo na mesma máquina.

---

# LINKS IMPORTANTES

## APLICAÇÃO

https://desafio-legalai-frontend.vercel.app/

## API

https://desafio-dev-legalai-gustavo-mota-macedo.onrender.com/api

### Endpoints da API

/solucoes (GET): retorna uma lista com todas as soluções possíveis

/solucoes/{int} (GET): retorna uma solução a partir de um identificador

/solucao (GET): retorna a melhor solução para o último usuário cadastrado

/usuarios (POST): cadastra um usuário a partid de um JSON no body

/usuarios (GET): retorna a lista de usuarios cadastrados