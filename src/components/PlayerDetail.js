import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";

export default function PlayerDetail(){

    const API_INVOKE_URL = 'https://8v1kam3209.execute-api.us-west-1.amazonaws.com/prod2';

    const [player, setPlayer] = useState({})

    let { id } = useParams();

    const getApi = async() => {
        fetch(`${API_INVOKE_URL}/students/${id}`)
        .then(response => response.json())
        .then(data => {
            setPlayer(data)
        })
    }
    
    useEffect(() => {
        getApi();
    }, [])

    return (
        <div>
            <h3>Player Name :  {player.fname} {player.lname}</h3>

        </div>
    )
}