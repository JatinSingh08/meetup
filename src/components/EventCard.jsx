import React from 'react'
import { useNavigate } from 'react-router-dom';

const EventCard = ({event}) => {

  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedDateTime = date.toLocaleString("en-US", options);
    return formattedDateTime;
  };
  
  
  return (
    <div className='flex-col mt-6 cursor-pointer'
    onClick={() => 
      navigate(`/event/${event?.id}`)
    }
    >
      <div className='relative'>
        <img src={event?.eventThumbnail} alt="eventThumbnail" 
        className='w-full h-56 rounded-lg'
        />
        <p className='bg-slate-100 rounded-lg px-2 absolute left-2 top-2'>
          {event?.eventType} Event
        </p>
      </div>
      <div className='text-start'>
        <p className='text-[#AA9BA5] text-md'>{formatDate(event?.eventStartTime)}</p>
        <h1 className='text-xl font-bold -mt-1'>{event?.title}</h1>
      </div>
    </div>
  )
}

export default EventCard
