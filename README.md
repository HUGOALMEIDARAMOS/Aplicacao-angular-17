
# Projeto utilizando a versão 17 do angular

Um projeto desenvolvido para aplicação do conhecimento na nova versão do angular.





## Referência

 - [Angular Dev](https://angular.dev/)
 - [Angular](https://angular.io/)
 - [Json-Server](https://www.npmjs.com/package/json-server)
 
 

## Instalação

Primeiro é preciso  instalar o json-server para simulr um serviço http.
Após baixar o projeto, e rodar o comando 

```bash
  npm i json-server
```
Após instalado, é necessário criar um arquivo com o nome db.json, e criar a estrutura simulando retorno do back, conforme exemplo abaixo:

{
  "produtos": [
    {
      "title": "armario",
      "id": 2
    },
  ]
}

Agora é possível rodar a aplicação com o comando:

```bash
  ng serve
```
