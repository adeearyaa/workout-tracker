import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddWorkoutForm from "./addWorkout";

function App() {
  const workoutsArray = [
    {
      key: uuidv4(),
      date: "2024-04-18",
      time: "08:00 AM",
      type: "Cardio",
      duration: "30 minutes",
    },
    {
      key: uuidv4(),
      date: "2024-04-19",
      time: "07:00 AM",
      type: "Strength Training",
      duration: "45 minutes",
    },
    {
      key: uuidv4(),
      date: "2024-04-20",
      time: "06:30 PM",
      type: "Yoga",
      duration: "60 minutes",
    },
    {
      key: uuidv4(),
      date: "2024-04-21",
      time: "09:00 AM",
      type: "HIIT",
      duration: "20 minutes",
    },
    {
      key: uuidv4(),
      date: "2024-04-22",
      time: "05:00 PM",
      type: "Cycling",
      duration: "30 minutes",
    },
  ];
  const [workouts, setWorkouts] = useState(workoutsArray);

  function deleteWorkout(index) {
    const newWorkouts = workouts.filter((item) => item.key !== index);
    setWorkouts(newWorkouts);
  }

  const addNewWorkout = (newItem) => {
    setWorkouts(workouts => [newItem, ...workouts])
  }

  const workoutDisplayList = workouts.map((workout) => (
    <div
      key={workout.key}
      className="relative border border-gray-300 m-2 p-4 rounded-lg bg-gray-100 shadow-lg"
    >
      <button
        onClick={() => deleteWorkout(workout.key)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-xl font-bold">{workout.type}</h2>
      <p className="text-gray-600">Date: {workout.date}</p>
      <p className="text-gray-600">Time: {workout.time}</p>
      <p className="text-gray-600">Duration: {workout.duration}</p>
    </div>
  ));

  return (
    <div className="min-h-full">
      <div className="flex p-10 font-bold justify-center items-center text-white bg-gray-900 font-sans text-3xl min-w-full">
        MyWorkout
      </div>
      <div className="flex min-w-full min-h-full justify-center">
        <div className="flex-1 flex-col justify-center m-1 bg-gray-900 items-center rounded-lg">
          {workoutDisplayList}
        </div>
        <div className="flex-1 flex-col justify-center m-1 rounded-lg bg-gray-900">
          <AddWorkoutForm newWorkout={addNewWorkout}/>
        </div>
      </div>
    </div>
  );
}

export default App;
