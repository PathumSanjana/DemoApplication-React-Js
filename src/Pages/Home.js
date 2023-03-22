import React from 'react'
import Content from '../components/Content'
import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
        <h1>Homepage</h1>
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
