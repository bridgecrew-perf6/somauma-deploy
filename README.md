# somauma-deploy
Somauma -  trilhando novos caminhos na programação.
> Continue a codar :octocat:
      
## Configuração de ambiente
Para que você possa rodar o projeto em sua máquina é necessário que configure o seu ambiente e, caso não tenha o NodeJS, instale a partir da [página oficial](https://nodejs.org/en/download/).

 - Ambiente

1. Instalar o [NodeJS](https://nodejs.org/en/download/)
2. Instalar o [VSCode](https://code.visualstudio.com/Download)
3. Instalar o [AngularCLI](https://cli.angular.io/) `npm install -g @angular/cli`
4. Instalar o [Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
5. Instalar o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

5. Clonar o repositório: `git clone https://github.com/isadoraperes/somauma-deploy.git`
6. Abra o terminal e dê o comando `docker-compose up -d --build` para subir o Docker
7. Acesse a pasta `somauma-angular` do projeto clonado e rode o comando `ng serve`

- Swagger

8. Acesse o Swagger através da porta padrão do Docker com a url `http://localhost:9000/swagger-ui.html`

- Frontend

9. Acesse o front do projeto através da porta padrão do Angular com a url `http://localhost:4200/`

  - 🚧 O projeto ainda está em desenvolvimento, as ações de deletar e atualizar ainda estão sendo implementadas no Angular.
  - 🚀 O teste de CRUD simples pode ser feito através do Postman ou o aplicativo para teste de API's de sua preferência.
  - 🅰️ Caso deseje parar a aplicação Angular pressione `ctrl+c` no terminal.
  - 🐳 Caso deseje encerrar a imagem do Docker digite `docker stop (id ou nome container)` no terminal.


