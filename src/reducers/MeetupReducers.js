import { meetupsData } from "../data/data";
import { FILTER_BY_SEARCH } from "./constant";

export const initialState = {
  meetupsData: meetupsData.meetups,
  filters: {
    searchValue: '',
    dropdown: 'both'
  }
}

export const MeetupReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_SEARCH:
      return {
        ...state,
        meetupsData: state.meetupsData.filter(meetup => meetup.title.toLowerCase().includes(action.payload.toLowerCase()) || meetup.eventTags.some(event => event.toLowerCase().includes(action.payload.toLowerCase())) )
      }
  
    default:
      break;
  }
}