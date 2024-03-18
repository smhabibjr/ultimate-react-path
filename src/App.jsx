import Clock from "./components/Clock";
export default function App() {
  const numberOfClock = [1, 2, 3];
  return (
    <div>
      {numberOfClock.map((key) => (
        <Clock key={key} />
      ))}
    </div>
  );
}
