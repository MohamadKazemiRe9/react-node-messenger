import React , {useState,useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Header from "./header/Header";
import ChatBox from "./chatBox/ChatBox";
import moment from "moment"; 
import "./chat.css";

let socket;
function Chat ({location}){

    const [user, setUser] = useState("");
    const [room, setRoom] = useState("");
    const [message,setMessage] = useState("");
    const [messages,setMessages] = useState([]);
    const [onlineUsers,setOnlineUsers] = useState([])

    const ENDPOINT = 'https://chatsaz.herokuapp.com';


    useEffect(()=>{
        const {user , room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setUser(user);
        setRoom(room);

        socket.emit("join",{user,room},()=>{
            
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT,location.search]);

    useEffect(()=>{
        socket.on("message",({user,text,createdAt})=>{
            setMessages([...messages,{
                text,
                user,
                createdAt:moment(createdAt).format("HH:mm A")
            }]);

        });
    },[messages]);

    useEffect(()=>{
        socket.on("roomData",({getRoom,users})=>{
            setOnlineUsers([
                users,
            ]);
        });
    },[onlineUsers]);


    const sendMessage = (e)=>{
        e.preventDefault();
        if(message.trim()){
            socket.emit("sendMessage",message,()=>setMessage(""));
        }
    }

    return (
        <div className="chat_container">
            <div className="chat_box">
                <Header username={user} onlineUsers={onlineUsers}/>
                <ChatBox username={user} messages={messages} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}


export default Chat;