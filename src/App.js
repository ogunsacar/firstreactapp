import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const subtitle = "All latest events in Marioland";

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleOpen = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            hide events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            show events
          </button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <button className="btn" onClick={handleOpen}>
        Add New Event
      </button>
      {showModal && (
        <Modal handleClose={handleClose}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
