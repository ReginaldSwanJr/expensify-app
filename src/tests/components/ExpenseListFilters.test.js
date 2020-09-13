import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import {filters, altfilters} from '../fixtures/filters'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate= jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
        />
    )
});

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters witl altdata correctly', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot();
});


test('should handle text change', () => {
    const value = 'rent';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenCalledWith(value);
});


test('should sort by date.', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});


test('should sort by anount.', () => {
    const value = 'amount'
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});


test('should handle date changes.', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});


test('should handle date focus changes.', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calendarFocused')).toBe(calenderFocused);
});






