import Clock from "./components/Clock";
import User from "./components/User";
export default function App() {
  return (
    <div>
      <Clock locale="en-US" />
      <Clock locale="de-DE" />
      <Clock locale="bn-BD" />
      <hr />
      <User name="Habib">
        <p>this is child of user component</p>
      </User>
    </div>
  );
}
