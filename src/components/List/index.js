import React from 'react'
import './style.css';

export default function List(props) {
    if (!props.info) return null

    const { info, onClick } = props

    return (
        <div className="ListBox">
            {info && info.map(character =>
                <div key={character.name}>
                    <p
                        className="ListBox-Link"
                        onClick={() => onClick(character)}>
                        {character.name}
                    </p>
                </div>)}
        </div>
    )
}