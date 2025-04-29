import Tasks from "./Tasks";

export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('es-AR', {
    year: 'numeric', month: 'short', day: 'numeric'
  })
  return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold">{project.title}</h1>
					<button onClick={onDelete}>Delete</button>
				</div>
				<p>{formattedDate}</p>
				<p className="whitespace-pre-wrap">{project.description}</p>
			</header>
			<Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
		</div>
	);
}