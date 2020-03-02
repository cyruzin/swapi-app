import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import {
    render,
    fireEvent,
    getByText,
    getByTestId,
    cleanup
} from '@testing-library/react'

import Search from '.'

const search = [
    {
        name: 'Watto',
        height: '137',
        mass: 'unknown',
        hair_color: 'black',
        skin_color: 'blue, grey',
        eye_color: 'yellow',
        birth_year: 'unknown',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/34/',
    }
]

const info = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    starships: [
        {
            name: 'X-wing',
            model: 'T-65 X-wing',
            manufacturer: 'Incom Corporation',
            cost_in_credits: '149999',
            length: '12.5',
            max_atmosphering_speed: '1050',
            crew: '1',
            passengers: '0',
            cargo_capacity: '110',
            consumables: '1 week',
            hyperdrive_rating: '1.0',
            MGLT: '100',
            starship_class: 'Starfighter'
        }
    ]
}

const onClick = jest.fn()
const onKeyUp = jest.fn()

afterEach(cleanup);

test('the render of the Search component', () => {
    const { container } = render(<Search
        info={info}
        results={search}
        onClick={onClick}
        onKeyUp={onKeyUp}
    />)
    expect(container).toBeTruthy();
})

test('the listing of the Search component', () => {
    const { container } = render(<Search
        info={info}
        results={search}
        onClick={onClick}
        onKeyUp={onKeyUp}
    />)
    expect(container).toBeTruthy();
    fireEvent.focus(getByTestId(container, 'searchID'))
    fireEvent.keyUp(getByTestId(container, 'searchID'), { key: 'W', code: 65, charCode: 65 })
    expect(getByText(container, /Watto/i)).toBeInTheDocument()
})