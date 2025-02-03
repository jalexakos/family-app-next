import { DogEvent } from "./dog-event";

export default function Tracker() {
  return (
    <div>
      <DogEvent name="poop" time={123} />
      <DogEvent name="pee" time={456} />
    </div>
  );
}
