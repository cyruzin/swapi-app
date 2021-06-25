import React from 'react'
import './style.css'

const Search = React.forwardRef((props, ref) => {
    const { onKeyUp, onClick, onClear, results } = props

    return (
        <>
            <div className="InputBox-Wrapper">
                <input
                    className="Input"
                    type="text"
                    placeholder="Search"
                    onKeyUp={event => onKeyUp(event.target.value)}
                    data-testid="searchID"
                    ref={ref}
                />
                <span className="InputBox-Clear" onClick={() => onClear()}>x</span>
            </div>
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
        </>
    )
})

export default Search