import React, { useState } from "react";
import { Link } from "react-router-dom";
import './join.css';


function Join() {
    const [user, setUser] = useState("");
    const [room, setRoom] = useState("");


    return (
        <>
            <div className="contain">
                <div className="form">
                    <h3>join</h3>
                    <input type="text" placeholder="enter user name" className="d-block join_input"
                        value={user} onChange={(e) => setUser(e.target.value)} />
                    <input type="text" placeholder="enter room name" className="d-block join_input"
                        value={room} onChange={(e) => setRoom(e.target.value)} />
                    <Link onChange={e => (!user || !room) ? e.preventDefault() : null} to={`/chatroom?user=${user}&room=${room}`}>
                        <button className="btn btn-primary btn-block mt-2" type="submit">join</button>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Join;