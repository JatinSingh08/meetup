import { meetupsData } from "../data/data";
import { ADD_TO_RSVP, FILTER_BY_SEARCH, FITER_BY_DROPDOWN } from "./constant";

export const initialState = {
  meetupsData: meetupsData.meetups,
  filters: {
    searchValue: "",
    dropdown: "both",
  },
};

export const MeetupReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_SEARCH:
      const searchValue = action.payload.toLowerCase();
      const filteredMeetups = meetupsData.meetups.filter(
        (meetup) =>
          meetup.title.toLowerCase().includes(searchValue) ||
          meetup.eventTags.some((event) =>
            event.toLowerCase().includes(searchValue)
          )
      );
      return {
        ...state,
        meetupsData: filteredMeetups,
        filters: {
          ...state.filters,
          searchValue: action.payload,
        },
      };
    case ADD_TO_RSVP:
      return {
        ...state,
        meetupsData: state.meetupsData.map((meetup) =>
          meetup.id === action.payload.id
            ? { ...meetup, rsvp: true }
            : { ...meetup }
        ),
      };
    case FITER_BY_DROPDOWN:
      return {
        ...state,
        meetupsData: meetupsData.meetups.filter((event) => {
          if (action.payload === "both") {
            return (
              event.eventType === "Offline" || event.eventType === "Online"
            );
          } else {
            return event.eventType.toLowerCase() === action.payload;
          }
        }),
      };
    default:
      return state;
  }
};
