import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

export default function NoProject({ onAddProject }) {
	return (
		<div className='w-screen flex flex-col items-center justify-center'>
			<img src={noProjectImg} alt="empty task list" className='w-40'/>
			<h2>No project selected!</h2>
			<p>
				<Button label="Create New Project" onClick={onAddProject} />
			</p>
		</div>
	);
}