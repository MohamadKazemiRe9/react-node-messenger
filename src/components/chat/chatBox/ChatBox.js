import React from "react";
import "./ChatBox.css";
import Input from "./Input";
import ScrollToBottom from "react-scroll-to-bottom";


export default function ChatBox(props) {
  return (
    <div className="chat_box_container">
        <ScrollToBottom className="ROOT_CSS">
            {props.messages.map((message) => (
            <p key={(new Date().getTime().toString())+Math.random().toString()} className={message.user===props.username?"myself_message_style": message.user==="System message"? "system_message_style" :"another_message_style"}>
                <div>
                    {message.user!==props.username?<span class="username_message">{message.user} : </span>:""}
                    <div>{message.text}</div>
                    <div className="date_message">{message.createdAt}</div>
                </div>
            </p>
            ))}
        </ScrollToBottom>
      <Input
        message={props.message}
        sendMessage={props.sendMessage}
        setMessage={props.setMessage}
      />
    </div>
  );
}
