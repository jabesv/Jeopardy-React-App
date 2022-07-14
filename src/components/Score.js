const Score = (props) => {
    return (
        <div className="buttons">
            <h2 className="welcome">Score: {props.score}</h2>
            <button onClick={props.handleDecrease} className='decrease'>
                Decrease
            </button>
            <button onClick={props.handleIncrease} className="increase">
                Increase
            </button>
            <button onClick={props.handleReset} className='reset'>
                Reset
            </button>
        </div>
    )
}

export default Score