import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

export default function AddWorkoutForm({newWorkout}) {
  const [workout, setWorkout] = useState({
    key: uuidv4(),
    type: "",
    date: "",
    duration: "",
    time: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Adding Workout:", workout);
    newWorkout(workout)
    setWorkout({
        key: uuidv4(),
        type: "",
        date: "",
        duration: "",
        time: "",
      });
  };

  return (
    <div className="max-w-md mx-auto m-5 bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Add New Workout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type:
          </label>
          <input
            type="text"
            name="type"
            value={workout.type}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date:
          </label>
          <input
            type="date"
            name="date"
            value={workout.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration:
          </label>
          <input
            type="text"
            name="duration"
            value={workout.duration}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time:
          </label>
          <input
            type="time"
            name="time"
            value={workout.time}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
}

AddWorkoutForm.propTypes = {
    newWorkout: PropTypes.func.isRequired,
  };
