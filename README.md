# curso-nodejs
Testando conhecimentos de JS com os cursos da Rocketseat

Depois de baixar o nodemon, entramos na etapa de instalar o Docker e o MongoDB.

Para isso, entramos no site do Docker e o baixamos por lá.

Após a instalação, executamos um `docker pull mongo` sem as crases no terminal ou gitbash.

Depois disso, precisamos subir a máquina virtual com o comando `docker run --name instancia_mongodb -p 27017:27017 -d mongo` sendo que:
    --name é um nome qualquer para a máquina virtual;
    -p estamos dizendo que quando acessar a porta 27017 da nossa máquina, redirecione para a 27017 da máquina virtual que o mongo está escutando;
    -d é a imagem que eu quero utilizar. Neste caso é o mongo.

A imagem seria um pré select / uma base de configurações.

Para testar mais a fundo para ver as configurações desta máquina virtual rodando, podemos usar o Robo 3T.

Após fazer o download, abra-o e crie uma conection informando o nome, localhost e a porta 27017.

Ali vamos conseguir ver as bases de dados, os usuários, etc.

Se você desligar o pc ou reiniciar, essa instância vai cair e ficar com status EXITED mas você pode subir ela novamente com o comando `docker start instancia_mongodb`.