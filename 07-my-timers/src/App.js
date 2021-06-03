import { useState } from "react";

import TimerForm from "./components/TimerForm";
import Timer from "./components/Timer";

import styles from "./App.module.css";

function App() {
  const [timers, setTimers] = useState([
    // { id: 1, name: "Primeiro", duration: 3 },
    // { id: 2, name: "Segundo", duration: 60 },
  ]);

  const deleteTimer = (timerId) => {
    setTimers(timers.filter(({ id }) => id !== timerId));
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Timers</h1>

      <TimerForm setTimers={setTimers} />

      <div className={styles.timers}>
        {timers.map((timer) => (
          // Spread Properties
          // https://github.com/tc39/proposal-object-rest-spread
          <Timer key={timer.id} deleteTimer={deleteTimer} {...timer} />
        ))}
      </div>
    </main>
  );
}

export default App;
