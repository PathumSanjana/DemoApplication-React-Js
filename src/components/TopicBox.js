import React from 'react'
import './topicbox.css'

export default function TopicBox() {

//const topic = "My favourite food is kottu"
//const item = " and rice"

const a=10;
const b=20;
const c=a+b;
//const foodprices = {kottu:"250", rice:"350"} - we can't take objects and boolean values as react child

  return (
    <div>
        <div className="topicBox">
            <span className="text">{c}{alert("Hellow")}{[20,45,34,67]}</span>
            <span className="text">{[20,45,34,67]}</span>
            
        </div>
    </div>
  )
}
