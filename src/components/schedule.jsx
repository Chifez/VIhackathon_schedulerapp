import React,{useContext,useState} from 'react'
import { EventSettingsModel } from '@syncfusion/ej2-react-schedule'
import {useNavigate} from 'react-router-dom'
import AppContext from '../context'

const Schedule = () => {
    const [newEvent,setNewEvent] = useState([{
        title:'',
        allDay:false,
        start:new Date(26,0,1),
        end:new Date(26,0,2),
    }])

const {myEventList,setMyEventList} = useContext(AppContext);
const navigate =useNavigate();

const HandleSchedule = (e) => {
        e.preventDefault()
        setMyEventList({...myEventList,newEvent})
        navigate('/')
}
  return (
    <form>
        <div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type='text' placeholder='title of meeting' onChange={(e)=>setNewEvent({...newEvent,title:e.target.value})}/>
                </div>
                {/* <div>
                    <label htmlFor="title">Duration</label>
                    <input type='number/text' placeholder='time in hours' onChange={(e)=>setNewEvent({...newEvent,title:e.target.value})}/>
                </div> */}
                {/* <div>
                    <label htmlFor="title">Description</label>
                    <input type='text' placeholder='purpose of meeting' onChange={(e)=>setNewEvent({...newEvent,title:e.target.value})}/>
                </div> */}
        </div>

        <div>
            {/************** AVAILABILITY DETAILS ***************/}
                <div>
                        <h2>WHEN ARE YOU AVAILABLE FOR A MEETING</h2>
                        <div>
                            <>
                                <label htmlFor="earliest">Earliest time</label>
                                <input type='time' name='earliest' min='9:00' max='17:00'/>
                            </>
                            <>
                                <label htmlFor="latest">Latest time</label>
                                <input type='time' name ='latest' min='9:00' max='17:00'/>
                            </>
                        </div>
                </div>

                <div>
                        <h2>WHEN IS YOUR COLLEAGUE AVAILABLE FOR A MEETING</h2>
                        <div>
                            <>
                                <label htmlFor="earliest">Earliest time</label>
                                <input type='time' name='earliest' min='9:00' max='17:00'/>
                            </>
                            <>
                                <label htmlFor="latest">Latest time</label>
                                <input type='time' name="latest" min='9:00' max='17:00'/>
                            </>
                        </div> 
                </div>
        </div>
        <button onClick={(e)=>{HandleSchedule(e)}}>Create Schedule</button>
    </form>
  )
}

export default Schedule