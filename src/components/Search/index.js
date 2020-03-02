import React from 'react'
import Info from '../Info'
import './style.css'

export default function Search (props) {
    const { onKeyUp, onClick, results, info } = props
    return (
        <>
            <input
                className="Input"
                type="text"
                placeholder="Search"
                onKeyUp={event => onKeyUp(event.target.value)}
                data-testid="searchID"
            />
            {results.length > 0 &&
                <div className="InputBox">
                    <ul>
                        {results.map(value =>
                            <ol
                                key={value.name}
                                className="InputBox-Cursor"
                                onClick={() => onClick(value)}
                            >
                                {value.name}
                            </ol>
                        )}
                    </ul>
                </div>}
            <Info info={info} />
        </>
    )
}