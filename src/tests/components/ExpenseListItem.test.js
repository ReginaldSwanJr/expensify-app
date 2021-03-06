import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(
        <ExpenseListItem 
            key={expenses[2].id} // not needed here?
            {...expenses[2]}
        />);
    expect(wrapper).toMatchSnapshot();
});