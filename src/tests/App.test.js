import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';
describe('testes de API', () => {
    beforeEach(() => render(<App />));
    it('testa se a tabela é renderizada', async () => {
      const tabela = await screen.findByRole('table')
      expect(tabela).toBeInTheDocument();
      const tableHeader = await screen.findAllByRole('columnheader')
      expect(tableHeader).toHaveLength(13);
    })
  })
    describe('filtros na tela', () => {
      beforeEach(() => render(<App />));
      it('testa input para nome', () => {
        const inputName = screen.getByTestId('name-filter');
        expect(inputName).toBeInTheDocument;
      })
      it('testa filtro de coluna', () => {
        const selectColumn = screen.getByTestId('column-filter');
        expect(selectColumn).toBeInTheDocument;
      })
      it('testa filtro de operador', () => {
        const selectComparison = screen.getByTestId('comparison-filter');
        expect(selectComparison).toBeInTheDocument;
      })
      it('testa filtro de valor', () => {
        const inputValue = screen.getByTestId('value-filter');
        expect(inputValue).toBeInTheDocument;
      })
      it('testa botão de filtrar', () => {
        const selectColumn = screen.getByTestId('column-filter');
        expect(selectColumn).toBeInTheDocument;
      })
    })
    describe('funcionalidade dos filtros', () => {
      beforeEach(() => render(<App />));
      it('testa filtro de nome', () => {
        const inputName = screen.getByTestId('name-filter');
        userEvent.type(inputName, 't')
  
      })
      it('testa filtragem de conjunto', () => {
        const selectComparison = screen.getByTestId('comparison-filter')
        const inputValue = screen.getByTestId('value-filter')
        const btnFilter = screen.getByTestId('button-filter')
        const selectColumn = screen.getByTestId('column-filter')
  
        userEvent.selectOptions(selectColumn,
        screen.getAllByRole('option', { name: /population/i })[0])
        userEvent.selectOptions(selectComparison,
        screen.getByRole('option', { name: 'menor que'}))
        userEvent.type(inputValue, '100000')
        userEvent.click(btnFilter)
      })
    })