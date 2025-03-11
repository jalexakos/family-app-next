import { DogEvent } from "./dog-event";
import "./dog-event-card.css";

export default function Tracker() {
  return (
    <div className="container">
      <DogEvent name="poop" time={123} />
      <DogEvent name="pee" time={456} />
    </div>
  );
}
