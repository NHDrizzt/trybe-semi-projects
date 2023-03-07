# Boas-vindas ao repositório do exercício books-list

Para realizar o exercício, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Entregáveis

<details>
 <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
<summary><strong>🧑‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste exercício você vai desenvolver funções usando as `Higher Order Functions` **map** e **sort**

<br />

</details>

# Orientações

<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-0x-exercice-books-list.git`

- Entre na pasta do repositório que você acabou de clonar:

  - `cd sd-0x-exercice-books-list.git`

2. Instale as dependências

- Para isso, use o seguinte comando: `npm install`

3. Crie uma branch a partir da branch `main`

- Verifique se você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora, crie uma branch para qual você vai submeter os `commits` do seu exercício:
- Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
- Exemplo: `git checkout -b luiza-exercice-books-list`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_

  - Exemplo: `git status` (os arquivos no diretório `src` devem aparecer em vermelho)

- Adicione o novo arquivo ao _stage_ do Git

  - Exemplo: `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
  - `git status` (deve aparecer listado os arquivos do diretório `src` em verde)

- Faça o `commit` inicial
  - Exemplo: `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
- `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin luiza-exercice-books-list`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-exercice-books-list/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para o seu _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-exercice-books-list/pulls) e confira que o seu _Pull Request_ está criado.

</details>

<details>
<summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente;

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

- Os comandos que você utilizará com mais frequência são:

1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

2. `git add` _(para adicionar arquivos ao stage do Git)_;

3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

</details>

<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu projeto está pronto para o _'Code Review'_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _'code-review'_ e marque seus colegas:

- No menu à direita, clique no _link_ **'Labels'** e escolha a _label_ **code-review**;

- No menu à direita, clique no _link_ **'Assignees'** e escolha **o seu usuário**;

- No menu à direita, clique no _link_ **'Reviewers'** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um vídeo explicativo](https://vimeo.com/362189205).

⚠️ **Lembre-se que garantir que todas as _issues_ comentadas pelo Linter estão resolvidas!** ⚠️

</details>

<details>
<summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Para garantir a qualidade do código, vamos utilizar neste projeto o `ESLint`. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!

Para poder rodar o `ESLint` certifique-se de ter executado o comando `npm install` dentro do projeto.

Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
```

Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

Em caso de dúvidas, confira o material na plataforma sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />

Para que os testes sejam executados localmente, verifique se a versão do node na sua máquina é a `16`:

```bash
node -v
```

Caso a versão seja diferente, você pode utilizar o `nvm` para trocar de versão com o seguinte comando:

```bash
nvm use 16
```

Caso você não tenha o `nvm` instalado na sua máquina, você pode consultar o [conteúdo para instalação do nvm](https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-primeiros-passos/33d74e1e-05b9-4ce8-86e3-623c96afe64d/conteudos/60b99b90-bcd4-4189-9198-3389f7f742f3/instalacao-do-node-para-linux/156d871d-97f2-4169-b766-85e4e56812ac?use_case=side_bar)

Todos os requisitos do exercício serão testados **automaticamente** por meio do `Jest`.

Para testar todas funções no terminal, basta executar o comando abaixo:

```bash
npm test
```

Caso queira testar apenas uma função rode o comando abaixo:

```bash
npm test nome-do-arquivo
```

Por exemplo:

```bash
npm test formatedBookNames
```

</details>

<details>
<summary><strong>🏗 Estrutura do exercício</strong></summary><br />

Você trabalhará com uma estrutura de dados representando uma lista de livros (está no arquivo `books.js` no diretório `data`), contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje.

</details>

---

⚠️ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

## 1. Implemente a função `formatedBookNames`

<details>
  <summary>
  Implemente a função <code>formatedBookNames</code> que irá formatar as informações dos livros da nossa base de dados
  </summary> <br />

- A função `formatedBookNames` deverá ser implementada dentro do arquivo `formatedBookNames.js`

- A função `formatedBookNames` deverá retornar um array de strings no formato: `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`

**O que será testado:**

- A função `formatedBookNames`, deve retornar as informações de todos os livros contidos na base de dados formatados como indicado: `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`.

</details>

---

## 2. Implemente a função `formatedAuthorNamesBirth`

<details>
  <summary>
  Implemente a função <code>formatedAuthorNamesBirth</code> que irá formatar informações das pessoas autoras da nossa base de dados
  </summary> <br />

- A função `formatedAuthorNamesBirth` deverá ser implementada dentro do arquivo `formatedAuthorNamesBirth.js`

- A função `formatedAuthorNamesBirth` deverá retornar um array de strings no formato: `NOME_DA_PESSOA_AUTORA - ANO_DE_NASCIMENTO`

**O que será testado:**

- A função `formatedAuthorNamesBirth`, deve retornar um array de strings;

- A função `formatedAuthorNamesBirth`, deve retornar as informações de todas as pessoas autoras contidas na base de dados formatados como indicado: `NOME_DA_PESSOA_AUTORA - ANO_DE_NASCIMENTO`.

</details>

---

## 3. Implemente a função `nameAndAge`

<details>
 <summary>
  Implemente a função <code>nameAndAge</code> que deve retornar um array de objetos, os objetos devem conter informações do autor
  </summary> <br />

- A função `nameAndAge` deverá ser implementada dentro do arquivo `nameAndAge.js`

- Retorne um array de objetos, cada objeto deve conter:

  - a chave `author`, e o valor deve ser o nome da pessoa autora
  - a chave `age`, e o valor deve ser a idade da pessoa autora quando lançou o livro

**O que será testado:**

- A função, retorna um array de objetos

- Cada objeto possui as chaves `author` e `age`

- O array está ordenado corretamente, do autor que fez o lançamento com menor idade para o que fez o lançamento com maior idade

</details>
