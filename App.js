import React ,{useState} from "react";
import "./styles.css";


var emojiDictionary = {
    "🥳" : "Partying face",
    "🥰" : "Smiling Face With Hearts",
    "😛" : "Joke",
    "💙" :  "Support",
    "🌠" : "Shooting Star",
    "⛲" : "A water fountain",
    "😌" : "Relieved Face",
    "😉" : "winking face",
    "😈" : "smiling face with horns",
    "😑" : "expressionless face"
};

var emojisWeKnow = Object.keys(emojiDictionary)

export default function App(){
    const [meaning,setMeaning] = useState("");
    function emojiInputHandler(event){
        var userInput = event.target.value;
        var meaning = emojiDictionary[userInput];
        if (meaning === undefined){
            meaning = "we don`t have this in our database";
        }
        setMeaning(meaning);
    }

    function emojiClickHandler(emoji){
        var meaning = emojiDictionary[emoji];
        setMeaning(meaning)
    }
    return(
        <div className = "App">
            <h1>inside outttt</h1>

            <input onChange = {emojiInputHandler}/>
            <h2>{meaning}</h2>

            <h3>emojis you know</h3>
            {emojisWeKnow.map(function(emoji){
                return (
                    <span
                      onClick = { () =>emojiClickHandler(emoji)}
                      style = {{fontSize : "2rem",padding:"0.5rem",cursor:"pointer"}}
                      key = {emoji}
                    >
                        {emoji}
                    </span>
                );
            })}
        </div>
    );
}

// things to notice
// class ---> className
// style ---> takes an object instesd of "" 