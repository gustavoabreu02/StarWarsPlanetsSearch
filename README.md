# Projeto Star Wars Planets

Este projeto é uma lista de planetas do universo de Star Wars com filtros para facilitar a busca por um planeta específico. O objetivo é utilizar **Context API e Hooks** do **React** para gerenciar o estado global da aplicação.


### Habilidades desenvolvidas neste projeto

* Utilizar a _Context API_ do **React** para gerenciar estado.
* Utilizar o _React Hook useState_;
* Utilizar o _React Hook useContext_;
* Utilizar o _React Hook useEffect_;
* Criar _React Hooks_ customizados.
* Escrever testes para garantir que sua aplicação possua uma boa cobertura de testes.

### Rodando a aplicação

Para rodar a aplicação, basta clonar o repositório, instalar as dependências com `npm install` e iniciar a aplicação com `npm start`.

### Estrutura do projeto

O projeto foi criado utilizando o _create-react-app_, com a seguinte estrutura de pastas:

```
src
|__ components/
|   |__ Filters.jsx
|   |__ Table.jsx
|__ context/
|   |__ MyProvider.jsx
|   |__ MyContext.jsx
|__ tests/
|   |__ filters.test.js
|   |__ table.test.js
|__ App.css
|__ App.jsx
|__ index.js
|__ setupTests.js
```

A pasta `components` contém os componentes da aplicação. `Filters.jsx` é responsável por renderizar os filtros de busca e `Table.jsx` renderiza a tabela com os planetas. A pasta `context` contém o Provider e o Context utilizados para gerenciar o estado global da aplicação. Por fim, a pasta `tests` contém os testes escritos para os componentes.

### Uso da aplicação

Ao acessar a aplicação, é possível visualizar uma tabela com todos os planetas do universo de Star Wars. É possível buscar por um planeta específico através do filtro "Nome". Além disso, é possível ordenar a tabela por uma coluna específica, escolhendo a coluna desejada no dropdown "Ordenar por coluna". A ordem também pode ser escolhida através do botão "Ordem". Ao clicar no botão, a ordem da tabela é alterada de ascendente para descendente ou vice-versa.

### Como contribuir

Se você quiser contribuir com o projeto, basta criar uma Pull Request com as suas alterações. Será um prazer receber a sua contribuição!

## Autor

Esse projeto foi desenvolvido por - [@gustavoabreu02](https://www.github.com/gustavoabreu02).