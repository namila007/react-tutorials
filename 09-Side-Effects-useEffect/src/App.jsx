import { useCallback, useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

function App() {
  const jsonPicked = JSON.parse(localStorage.getItem("pickedPlaces")) || [];
  const picked = jsonPicked.map((id) =>
    AVAILABLE_PLACES.find((place) => place.id === id),
  );
  console.log(picked);
  // const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(picked);
  const [places, setPlaces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      const sortedPlace = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude,
      );
      setPlaces(sortedPlace);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setIsModalOpen(true);
    console.log("start remove place", id, isModalOpen);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = places.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    const storedPlaces = JSON.parse(localStorage.getItem("pickedPlaces")) || [];
    console.log(storedPlaces, storedPlaces.indexOf(id));
    if (storedPlaces.indexOf(id) === -1) {
      console.log("place already picked", id, storedPlaces);
      localStorage.setItem(
        "pickedPlaces",
        JSON.stringify([id, ...storedPlaces]),
      );
    }
  }

  const handleRemovePlace = useCallback(
    function handleRemovePlace() {
      setPickedPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current),
      );
      setIsModalOpen(false);
      const storedPlaces =
        JSON.parse(localStorage.getItem("pickedPlaces")) || [];
      const pickedPlaces = storedPlaces.filter(
        (id) => id !== selectedPlace.current,
      );
      localStorage.setItem("pickedPlaces", JSON.stringify(pickedPlaces));
    },
    [pickedPlaces, isModalOpen],
  );

  return (
    <>
      {console.log("App rendered")}
      <Modal open={isModalOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={places}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
