import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData'


describe('req 5 e 8', () => {

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
Promise.resolve({
json: () => Promise.resolve(testData)
})) 
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('chamada API', () => {
    render(<App />);
    expect(fetch).toHaveBeenCalled()
  })


  test('filter by name', async () => {
    render(<App />);
    const nome = await screen.findByTestId("name-filter",'',{timeout: 5000});
    expect(nome).toBeInTheDocument()
    userEvent.type(nome, "Tatooine")
    const table = document.getElementsByTagName("tr")
    await waitFor(() => {
      expect(table).toHaveLength(2) 
      })
  }, 7000)

  test('formulario', () => { 
    render(<App />);
    const nome = screen.getByTestId("name-filter")
    expect(nome).toBeInTheDocument()
    const coluna = screen.getByTestId("column-filter")
    expect(coluna).toBeInTheDocument()
    const valor = screen.getByTestId("value-filter")
    expect(valor).toBeInTheDocument()
    const botao = screen.getByTestId("button-filter")
    expect(botao).toBeInTheDocument()
    const comparasion = screen.getByTestId("comparison-filter")
    expect(comparasion).toBeInTheDocument()
    const cleaAll = screen.getByTestId("button-remove-filters")
    expect(cleaAll).toBeInTheDocument()
  });  

  test('tabela', async () => { 
    render(<App />);
    const botao = await screen.findByTestId("button-filter",'',{timeout: 10000})
    await waitFor(() => {
    const table = document.getElementsByTagName("tr")
    expect(table).toHaveLength(11)
  })
  }, 12000);

  test('if this shit work', async () =>{
    render(<App />);
    const table = document.getElementsByTagName("tr")
    const botao = screen.getByTestId("button-filter")
    const coluna = screen.getByTestId("column-filter")
    const valor = screen.getByTestId("value-filter")
    const comparasion = screen.getByTestId("comparison-filter")
    userEvent.selectOptions(coluna, "population")
    userEvent.selectOptions(comparasion, "maior que")
    userEvent.clear(valor)
    userEvent.type(valor, "1000")
    console.log(valor);
    userEvent.click(botao)
    await waitFor(() => {
    expect(table).toHaveLength(11)
    })
    const cleaAll = screen.getByTestId("button-remove-filters")
    userEvent.click(cleaAll)
    expect(table).toHaveLength(11)
    userEvent.selectOptions(comparasion, "menor que")
    userEvent.clear(valor)
    userEvent.type(valor, "1000")
    userEvent.click(botao)
    await waitFor(() => {
      expect(table).toHaveLength(1)
      })
    userEvent.click(cleaAll)
    userEvent.selectOptions(comparasion, "igual a")
    userEvent.clear(valor)
    userEvent.type(valor, "1000")
    userEvent.click(botao)
    await waitFor(() => {
      expect(table).toHaveLength(2)
      })
  })


  test('if this work', async () =>{
    render(<App />);
    const table = document.getElementsByTagName("tr")
    const botao = screen.getByTestId("button-filter")
    const coluna = screen.getByTestId("column-filter")
    const valor = screen.getByTestId("value-filter")
    const comparasion = screen.getByTestId("comparison-filter")
    userEvent.selectOptions(coluna, "population")
    userEvent.selectOptions(comparasion, "maior que")
    userEvent.clear(valor)
    userEvent.type(valor, "1000")
    userEvent.click(botao)
    await waitFor(() => {
    expect(table).toHaveLength(11)
    })
    const button1 = screen.getByText("X")
    expect(button1).toBeInTheDocument()
    userEvent.click(button1)
    expect(button1).not.toBeInTheDocument()
  })

  test('orderDesc', async () => {
    render(<App />);
    const botao = screen.getByTestId("column-sort-button")
    const table = document.getElementsByTagName("tr")
    const radioAsc = screen.getByTestId("column-sort-input-asc")
    const radioDesc = screen.getByTestId("column-sort-input-desc")
    const columnSort = screen.getByTestId("column-sort")
    expect(botao).toBeInTheDocument()
    expect(radioAsc).toBeInTheDocument()
    expect(radioDesc).toBeInTheDocument()
    expect(columnSort).toBeInTheDocument()
    userEvent.selectOptions(columnSort, "population")
    userEvent.click(botao)
    userEvent.click(radioDesc)
    await waitFor(() => {
      expect(table).toHaveLength(11)
      })
    
  })

  test('orderAsc', async () => {
    render(<App />);
    const botao = screen.getByTestId("column-sort-button")
    const table = document.getElementsByTagName("tr")
    const radioAsc = screen.getByTestId("column-sort-input-asc")
    const radioDesc = screen.getByTestId("column-sort-input-desc")
    const columnSort = screen.getByTestId("column-sort")
    expect(botao).toBeInTheDocument()
    expect(radioAsc).toBeInTheDocument()
    expect(radioDesc).toBeInTheDocument()
    expect(columnSort).toBeInTheDocument()
    userEvent.selectOptions(columnSort, "population")
    userEvent.click(botao)
    userEvent.click(radioAsc)
    await waitFor(() => {
      expect(table).toHaveLength(11)
      })
    
  })


})