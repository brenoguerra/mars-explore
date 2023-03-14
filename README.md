# Mars Explore

Esse é um projeto para a aplicação de um teste técnico. Foram utilizados somente módulos nativos e features do Node.js, tecnologia escolhida para o desenvolvimento do mesmo.

## Padrões adotados

Tentei fazer algo com arquitetura limpa, mas devido o tempo e problemas que fui encontrando durante o desenvolvimento, optei por uma ideia de MVC, adicionando uma camada de services para tirar, de certa forma, a responsabilidade do Controller (`M`) de possuir regras de negócio. As pasta de entidades (`entities`) funcionam como os models (`M`). Não foi necessário fazer o uso dos views (`V`). Tudo mantém a simplicidade, possibilitando o fácil entendimento do código e manutenção bem prática.

## Setup

### Instalação

É necessário utilizar algum gerenciador de pacotes, eu preferi por gosto pessoal utilizar o `npm` nesse projeto.

1. Clone o repositório `git clone https://github.com/brenoguerra/mars-explore`
2. Acesse a pasta baixada `cd mars-explore`
3. Instale o npm `npm install`
4. Execute o app usando o comando `npm start`

### Testes

Antes de tudo, é importante saber que caso venha a ser executado os testes, é necessário utilizar a versão 18 do Node.js, pois os testes foram criados de forma nativa utilizando o Test Runner, disponível a partir dessa versão.

Como o projeto tem um tratamento de erros que não está da melhor forma e a execução não é feita via chamadas HTTP, isso certa forma dificultou a criação de testes end-to-end e até mesmo uma validação de possíveis cenários de erros e testes falhando. Dado isso, fiz somente testes para validar a entrada e saída de dados, conforme os exemplos enviados na descrição do teste técnico.

Para fazer a execução dos testes, basta executar o comando `npm test`.