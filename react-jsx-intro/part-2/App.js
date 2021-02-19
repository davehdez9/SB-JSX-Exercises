const App = () => {
    return (
        <div>
            <Tweet
                username="daveLaher"
                name="David"
                message="First Tweet"
            />
            <Tweet
                username="daisyLinda"
                name="Daisy"
                message="First Tweet"
            />
            <Tweet
                username="frodoSam"
                name="Sam&Frodo"
                message="First Tweet"
            />
        </div>
    )    
}

ReactDOM.render(<App/>, document.getElementById("root"))