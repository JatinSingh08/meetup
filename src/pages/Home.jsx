import React, { useContext } from 'react'
import { meetupsData } from '../data/data'
import { EventCard } from '../components'
import { MeetupContext } from '../context/meetup-context'
import { FITER_BY_DROPDOWN } from '../reducers/constant'

const Home = () => {
  const { state, dispatch } = useContext(MeetupContext);


  return (
    <div className=''>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-bold text-start'>Meetup Events</h1>
        <select name="eventType" id="eventType" className='cursor-pointer  h-10 bg-white drop-shadow-md rounded-md px-1'
        onChange={(e) => dispatch({ type: FITER_BY_DROPDOWN, payload: e.target.value})}
        >
          <option value="Select" disabled>Select Event Type</option>
          <option value="offline">Offline</option>
          <option value="online">Online</option>
          <option value="both" selected>Both</option>
        </select>
      </div>
      <div className='grid grid-cols-3 mt-4 gap-12 justify-center items-center '>
        {
          state.meetupsData.map(event => (
            <EventCard 
            key={event?.id}
            event={event}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
