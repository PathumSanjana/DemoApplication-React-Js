import React from 'react'
import Content from '../components/Content'
import TopicBox from '../components/TopicBox'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/About">Go to about page</Link>
        <Link to="/Contact">Go to contact page</Link>
        <TopicBox color="blue" food="kottu">
          <span>This is the description</span>
        </TopicBox>
        <TopicBox color="red" food="rice">
          <button>This is a button</button>
        </TopicBox>
        <TopicBox color="green" food="pittu">
          <p>This is good</p>
        </TopicBox>
        <Content/>
    </div>
  )
}
