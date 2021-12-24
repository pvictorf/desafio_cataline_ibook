# iBook Desafio - Nuxt JS
![](print.gif)

Demo: https://ibook-pvictorf.herokuapp.com/



## Build Setup

```bash
# Instale as dependências
$ npm install

# Servidor configurado para localhost:3000
$ npm run dev

# Localhost IP compartilhado (rodar o projeto em mobile)
$ npm run dev:shared

# Build para Production & Iniciar o servidor
$ npm run generate
$ npm run build
$ npm run start
```

## Heroku Deploy
https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-heroku

1) Adicione o script do Heroku para ser executado após o build da aplicação no package.json
**"heroku-postbuild": "npm run build",**

2) Setar as varivaveis de ambiente

**heroku config:set HOST=0.0.0.0
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_ENV=production**
