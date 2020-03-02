import React from 'react'
import './style.css';

export default function List (props) {
    if (!props.info) return null

    const { info, onClick } = props
    return (
        <div className="ListBox">
            {info && info.map(character =>
                <div key={character.name}>
                    <p
                        className="ListBox-Link"
                        onClick={() => onClick(character)}>
                        Name: {character.name}
                    </p>
                    <p>Gender: {character.gender}</p>
                    <p>Birth year: {character.birth_year}</p>
                    <p>Skin color: {character.skin_color}</p>
                    <p>Hair color: {character.hair_color}</p>
                    <p>Eye color: {character.eye_color}</p>
                    <p>Height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                </div>)}
        </div>
    )
}