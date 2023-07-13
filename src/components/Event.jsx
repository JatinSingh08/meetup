import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { meetupsData } from "../data/data";
import Modal from "antd/es/modal/Modal";
import { MeetupContext } from "../context/meetup-context";
import { ADD_TO_RSVP } from "../reducers/constant";

const Event = () => {
  const { id } = useParams();
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const { state, dispatch } = useContext(MeetupContext);

  const event = meetupsData?.meetups?.find((meetup) => meetup.id === id);

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
    <div className="flex  gap-24 text-start ">
      <div className="flex-col flex gap-2 flex-1">
        <div>
          <h1 className="text-4xl font-semibold">Marketing Seminar</h1>
          <p>Hosted By:</p>
          <p className="text-lg font-medium">{event?.hostedBy}</p>
        </div>
        <div>
          <img
            src={event?.eventThumbnail}
            alt="eventThumbnail"
            className="w-96 h-72 object-contain"
          />
          <div className="text-start">
            <h1 className="text-2xl font-semibold">Details: </h1>
            <p>{event?.eventDescription}</p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Additional Information: </h1>
          <p>
            <span className="font-medium">Dress Code: </span>
            {event?.additionalInformation?.dressCode}
          </p>
          <p>
            <span className="font-medium">Age Restrictions: </span>
            {event?.additionalInformation?.ageRestrictions}
          </p>
        </div>
        <div className="flex-col flex gap-2">
          <h1 className="text-2xl font-semibold">Event Tags: </h1>
          <div className="flex gap-2">
            {event?.eventTags.map((tag, idx) => (
              <p key={idx} className="bg-red-400 px-3 py-1 rounded-lg">{tag}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-col flex gap-4 text-start">
        <div className="bg-white p-4 flex-col flex gap-4 rounded-lg">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div>
              <p>{formatDate(event?.eventStartTime)}</p>
              <p>{formatDate(event?.eventEndTime)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div>
              <p>{event?.location}</p>
              <p>{event?.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div>
              <p>{event?.price}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text2xl font-semibold">Speakers: ({event?.speakers?.length})</h1>
          <div className="flex gap-4">
            {
              event.speakers.map(speaker => (
                <div className="flex-col flex items-center justify-center p-4 rounded-lg bg-white shadow-lg">
                  <img src={speaker.image} alt="profile" className="w-16 h-16 rounded-full object-cover" />
                  <h1 className="text-lg font-semibold">{speaker.name}</h1>
                  <p>{speaker.designation}</p>
                </div>
              ))
            }
          </div>
        </div>
          <button className="px-6 mx-auto py-2 bg-red-500 rounded-lg"
          onClick={() => setRsvpModalOpen(true)}
          >
            {event?.rsvp ? "Already RSVPed" : "RSVP"}
          </button>
          {
            rsvpModalOpen && 
            (
              <Modal
              title="RSVP"
              visible={rsvpModalOpen}
              footer={null}
              onCancel={() => setRsvpModalOpen(false)}
              onOk={() => {
                dispatch({ type: ADD_TO_RSVP, payload: { id: event?.id, rsvp: true } });
                setRsvpModalOpen(false);
              }}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="text-2xl font-semibold">Complete Your RSVP</h1>
                  <p>Fill in your personal information</p>
                </div>
                <div className="flex flex-col gap-6">
                  <label htmlFor="name" className="text-xl font-medium flex flex-col gap-2">
                    Name:
                    <input type="text" className="rounded-lg outline-blue-400 bg-rose-50 h-10" />
                  </label>
                  <label htmlFor="email" className="text-xl font-medium flex flex-col gap-2">
                    Email:
                    <input type="email" className="rounded-lg outline-blue-400 bg-rose-50 h-10" />
                  </label>
                </div>
                <p className="text-md text-blue-400">*You have to make the payment at the venue.</p>
                <button
                  className="bg-red-500 rounded-lg shadow-md text-white py-2"
                  onClick={() => {
                    dispatch({ type: ADD_TO_RSVP, payload: { id: event?.id, rsvp: true } });
                    setRsvpModalOpen(false);
                  }}
                >
                  RSVP
                </button>
              </div>
            </Modal>
            
            )
          }
      </div>
    </div>
  );
};

export default Event;
