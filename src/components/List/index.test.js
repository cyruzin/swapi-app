import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import {
    render,
    fireEvent,
    getByText,
    cleanup
} from '@testing-library/react'

import List from '.'

const list = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',

    },
    {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a',
        homeworld: 'https://swapi.co/api/planets/1/',
    }
]

const onClick = jest.fn()

afterEach(cleanup);

test('the render of the List component', () => {
    const { container } = render(<List info={list} onClick={onClick} />)
    expect(container).toBeTruthy();
})

test('the listing of the List component', () => {
    const { container } = render(<List info={list} onClick={onClick} />)
    expect(container).toBeTruthy();
    expect(getByText(container, 'Luke Skywalker')).toBeInTheDocument()
})

test('the click of the List component', () => {
    const { container } = render(<List info={list} onClick={onClick} />)
    expect(container).toBeTruthy();
    fireEvent.click(getByText(container, 'Luke Skywalker'))
    expect(onClick).toHaveBeenCalledTimes(1)
})