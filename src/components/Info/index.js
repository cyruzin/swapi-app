import React from 'react'
import { BASE_URL } from '../../util/constants'
import './style.css';

export default function Info(props) {
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
        mass
    } = info

    return (
        <div className="InfoBox">
            <div className="Info-Link"><a href={BASE_URL}>&#8592;</a></div>

            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Birth year: {birth_year}</p>
            <p>Skin color: {skin_color}</p>
            <p>Hair color: {hair_color}</p>
            <p>Eye color: {eye_color}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </div>
    )
}