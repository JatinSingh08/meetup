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
      const searchValue = action.payload.toLowerCase();
      const filteredMeetups = meetupsData.meetups.filter(
        (meetup) =>
          meetup.title.toLowerCase().includes(searchValue) ||
          meetup.eventTags.some((event) => event.toLowerCase().includes(searchValue))
      );
      return {
        ...state,
        meetupsData: filteredMeetups,
        filters: {
          ...state.filters,
          searchValue: action.payload,
        },
      };

    default:
      return state;
  }
};
