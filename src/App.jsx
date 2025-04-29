import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NoProject from "./components/NoProject.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";


function App() {
  const [projectState, setProjectState] = useState({
		selectedProject: undefined,
		projects: /** @type {any[]} */ ([]),
		tasks: /** @type {any[]} */ ([]),
	});



  function handleAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProject: null
      }
    })
  }

  let content;
  console.log(projectState.tasks);
  

  if(projectState.selectedProject === null) { //adding new project
    content = <NewProject addNew={handleNewProject} onCancel={handleCancel} />;
  } else if(projectState.selectedProject === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  } else {
    const selected = projectState.projects.find(project => project.id === projectState.selectedProject)
    content = (
			<SelectedProject
				project={selected}
				onDelete={handleDelete}
				onAddTask={handleAddTask}
				onDeleteTask={handleDeleteTask}
				tasks={projectState.tasks}
			/>
		);
  }

  function handleNewProject(projectData) {
		setProjectState((prevState) => {
      const newId = Math.random();
			const newProject = { ...projectData, id: newId };
			return {
        ...prevState,
				selectedProject: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}


  function handleCancel() {
    setProjectState((prevState) => {
			return {
        ...prevState,
				selectedProject: undefined,
			};
		});
  }

  function handleSelect(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleDelete() {
    setProjectState((prevState) => {
			return {
				...prevState,
				selectedProject: undefined,
        projects: prevState.projects.filter(item => item.id !== prevState.selectedProject)
			};
		});
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newId = Math.random();
      const newTask = { text, id: newId, project: prevState.selectedProject };
			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks]
			};
		});
  }

  function handleDeleteTask(id) {
		setProjectState((prevState) => {
			return {
				...prevState,
				tasks: prevState.tasks.filter(
					(item) => item.id !== id
				),
			};
		});
	}

  return (
		<main className="h-screen my-8 flex gap-8">
			<Sidebar
				onAddProject={handleAddProject}
				projects={projectState.projects}
				onSelect={handleSelect}
        selectedID={projectState.selectedProject}
			/>

			{content}
		</main>
	);
}

export default App;
