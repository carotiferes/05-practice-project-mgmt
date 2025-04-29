import { useState } from "react";

export default function NewTask({ onAddTask }) {
	const [enteredTask, setEnteredTask] = useState('');

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}
	function handleClick() {
    if(enteredTask.trim() !== '') onAddTask(enteredTask);
		setEnteredTask("");
	}
	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				className="w-64 px-2 rounded-sm bg-stone-200"
				onChange={handleChange}
				value={enteredTask}
			/>
			<button onClick={handleClick}>Add Task</button>
		</div>
	);
}
