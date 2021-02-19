const Tweet = (props) => {
    const date = Date()

    return (
        <ul>
            <li>Username: {props.username}</li>
            <li>Name: {props.name}</li>
            <li>Date: {date}</li>
            <li>Message: {props.message}</li>
        </ul>
    )
}