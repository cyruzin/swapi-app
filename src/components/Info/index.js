import React from 'react'
import { urlHandler } from '../../util/helpers'
import './style.css';

export default function Info (props) {
    if (!props.info) return null

    const { info } = props
    const {
        name,
        gender,
        birth_year,
        skin_color,
        hair_color,
        eye_color,
        height,
        mass,
        starships,
        image
    } = info

    return (
        <div className="InfoBox">
            <div className="Info-Link"><a href={urlHandler()}>&#8592;</a></div>

            <div className="Info-Img"><img alt={name} src={image} /></div>

            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Birth year: {birth_year}</p>
            <p>Skin color: {skin_color}</p>
            <p>Hair color: {hair_color}</p>
            <p>Eye color: {eye_color}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            {starships.length > 0
                ? <div><p>Starships:</p>
                    {starships.map(value => {
                        return (
                            <ul className="Info-Starships" key={value.name}>
                                <ol>Name: {value.name}</ol>
                                <ol>Model: {value.model}</ol>
                                <ol>Starship class: {value.starship_class}</ol>
                                <ol>Manufacturer: {value.manufacturer}</ol>
                                <ol>Length: {value.length}</ol>
                                <ol>Max atmosphering speed: {value.max_atmosphering_speed}</ol>
                                <ol>Consumables: {value.consumables}</ol>
                                <ol>Crew: {value.crew}</ol>
                                <ol>Passengers: {value.passengers}</ol>
                                <ol>Hyperdrive rating: {value.hyperdrive_rating}</ol>
                                <ol>MGLT: {value.MGLT}</ol>
                                <ol>Cargo capacity: {value.cargo_capacity}</ol>
                                <ol>Cost in credits: {value.cost_in_credits}</ol>
                            </ul>
                        )
                    })
                    }
                </div> : <p>Starships: n/a</p>}
        </div >
    )
}