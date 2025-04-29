import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ addNew, onCancel }) {
  const modal = useRef();
	const title = useRef();
	const description = useRef();
	const dueDate = useRef();

	function handleSave() {
		const enteredTitle = title.current.value;
		const enteredDesc = description.current.value;
		const enteredDate = dueDate.current.value;

		if (
			enteredTitle.trim() === "" ||
			enteredDesc.trim() === "" ||
			enteredDate.trim() === ""
		) {
      modal.current.open();
      return;
    }
    addNew({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDate,
    });
	}

	return (
		<>
			<Modal ref={modal} buttonCaption='Okay'>
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to enter a value.</p>
      </Modal>
			<div className="w-[35rem] m-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
							Cancel
						</button>
					</li>
					<li>
						<button
							className="bg-stone-800 text-stone-50 py-2 px-6 rounded-md hover:bg-stone-950"
							onClick={handleSave}
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input label="Title" ref={title} />
					<Input label="Description" textarea ref={description} />
					<Input label="Due Date" type="date" ref={dueDate} />
				</div>
			</div>
		</>
	);
}