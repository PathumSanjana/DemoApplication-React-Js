import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {

//const topic = "My favourite food is kottu"
//const item = " and rice"

const a=10;
const b=20;
const c=a+b;
//const foodprices = {kottu:"250", rice:"350"} - we can't take objects and boolean values as react child

  return (
    <div>
        <div className="topicBox">
            <span className="text">My favourite color is {props.color} and food is {props.food}</span>
            {props.children}
        </div>
    </div>
  )
}
