import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm'

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    // had to add the component ExpensForm instead of finding it inside AddExpensePage imported above
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});