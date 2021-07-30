import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


export default function Home() {
    // base api url
    const API_INVOKE_URL = 'https://8v1kam3209.execute-api.us-west-1.amazonaws.com/prod2'

// state variable for form object
const [players, setPlayers] = useState([])
const [player, setPlayer] = useState({})

 
// api calls


// useEffect to get all students
const searchApi = async () => {
fetch(API_INVOKE_URL + '/students')
    .then(response => response.json())
    .then(data => { 
        setPlayers(JSON.parse(JSON.stringify(data)));
    } 
)
}

useEffect(() => { 
    searchApi();
    }, [])
//onSubmit = pass form object - updated using state
// students resource, PUT method, student in the request body



const submit = e => {
    e.preventDefault()
    fetch(API_INVOKE_URL +'/students', {
        method: 'PUT',
        body: JSON.stringify({player}),
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(() => {searchApi()})
}




return (

<div>

<form onSubmit={submit}>
    <label>Player Number: </label>
    <input
        type="text"
        name="player[id]"
        value={player.id}
        onChange={e => setPlayer({ ...player, id: e.target.value })} 
    />
    <br />
    <label>First Name: </label>
    <input
        type="text"
        name="player[fname]"
        value={player.fname}
        onChange={e => setPlayer({ ...player, fname: e.target.value })} 
    />
    <br />
    <label>Last Name: </label>
    <input
        type="text"
        name="player[lname]"
        value={player.lname}
        onChange={e => setPlayer({ ...player, lname: e.target.value })} 
    />
    <br />
    <input type="submit" name="Create Player" />
</form>


<h2>Football player</h2>
  <table>
      <thead>
          <tr>
              <th>Number</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            {players.map(player =>
            <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.fname}</td>
                <td>{player.lname}</td>
                <td><Link to={`playerDetail/${player.id}`}>{player.id}</Link></td>
            </tr>
            )}
        </tbody>
    </table>


</div>
)
}