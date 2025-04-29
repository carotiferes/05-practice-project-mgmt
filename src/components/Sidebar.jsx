import Button from "./Button";
export default function Sidebar({ onAddProject, projects, onSelect, selectedID }) {
	return (
		<aside className="bg-[#100D0C] text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
			<h1 className="my-8 text-center text-5xl font-bold">Your Projects</h1>
			<div>
				<Button label="+ Add Project" onClick={onAddProject} />
			</div>
			<ul className="mt-8">
				{projects.map((project) => {
					let classes =
						"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200";
					if(selectedID === project.id) classes += " text-stone-200 bg-stone-800";
					else classes += " text-stone-400";
					return <li key={project.id}>
						<button
							className={classes}
							onClick={() => onSelect(project.id)}
						>
							{project.title}
						</button>
					</li>
				})}
			</ul>
		</aside>
	);
}
