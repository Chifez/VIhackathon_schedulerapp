import React from 'react'
import MyCalender from '../components/calender'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <MyCalender />
       <Link to ='schedule'><button>schedule new meeetin</button></Link>
    </div>
  )
}

export default Home