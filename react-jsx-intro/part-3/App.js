const App = () => {
    return (
        <div>
            <Person
                name='Alexander'
                age={7}
                hobbies={["soccer", "video games"]}
            />
            <Person
                name='David'
                age={30}
                hobbies={["Computers"]}
            />
            <Person
                name='Frodo'
                age={18}
                hobbies={["Sleep"]}
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))