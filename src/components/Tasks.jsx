import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {

	return (
		<section>
			<h2 className="font-bold uppercase">Tasks</h2>
			<NewTask onAddTask={onAddTask} />
			{tasks.length === 0 ? (
				<p>This project doesn't have tasks</p>
			) : (
				<ul className="p-4 mt-8 rounded-md bg-stone-100">
					{tasks.map((task) => (
						<li key={task.id} className="flex justify-between my-4">
							<span>{task.text}</span>
							<button onClick={() => onDeleteTask(task.id)}>Clear</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}