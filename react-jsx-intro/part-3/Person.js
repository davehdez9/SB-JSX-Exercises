/**
 * Render <p> Learn some information about this person </p>
 *  Properties:
 *  - name 
 *  - age
 *  - hobbies ->
 *      hobbies = ['Play soccer', '', ....] 
 *      return <li>Play Soccer</li>
 * 
 * If age > 18 -> <h3>Please Go Vote!</h3>
 * Else -> <h3>You must be 18!</h3>
 * 
 * If name.character > 8 -> Display the first 6 character of the name
 * 
 * App.js -> 3 Examples 
 */

 const Person = (props) => {
     let reply
     let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)

     if(props.age > 18){
        reply = "Please Go Vote!"
     } else {
         reply = "You must be 18!"
     }
     return (
        <div>
            <p> Learn some information about this person </p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
            </ul>
            <ul>
                <b>Hobbies:</b>
                {hobbies}
            </ul>
            <h3>{reply}</h3>
        </div>
     )
 }