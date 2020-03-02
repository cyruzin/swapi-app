import React from 'react'

import '@testing-library/jest-dom'
import { render, getByText, cleanup } from '@testing-library/react'

import Info from '.'

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

afterEach(cleanup)

test('the render of the Info component', () => {
    const { container } = render(<Info info={info} />)
    expect(container).toBeTruthy();
})

test('the listing of the Info component', () => {
    const { container } = render(<Info info={info} />)
    expect(container).toBeTruthy();
    expect(getByText(container, /Luke Skywalker/i)).toBeInTheDocument()
})