import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 1,
    title: "The is the first class lecture",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    description: "This is the first class description",
  },
  {
    id: 2,
    title: "The is the Second class lecture",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Englischer_Garten_M%C3%BCnchen.jpg",
    description: "This is the second class description",
  },
];
function AllMeetups() {
  return (
    <section>
      <h1> All Meetups Page </h1>
      <MeetupList meetups={ DUMMY_DATA } />
       
    </section>
  );
}

export default AllMeetups;
