import styles from "./input-todo.module.css";
import { Input } from "../input/input";

export const InputTodo = ({
	placeholder,
	title,
	requestAddTodo,
	newTodo,
	setNewTodo,
	isCreating,
	setIsCreating,
}) => {
	const requestNewTodo = () => {
		if (!(newTodo === "")) {
			requestAddTodo(newTodo);
			setNewTodo("");
			setIsCreating(false);
		}
	};

	return (
		<>
			<form onSubmit={requestNewTodo}>
				<div className={styles.addTask}>
					<Input
						placeholder={placeholder}
						todo={newTodo}
						setTodo={setNewTodo}
						setIsCreating={setIsCreating}
					></Input>

					<input
						type="submit"
						value=""
						className={
							isCreating
								? styles.submitTask
								: `${styles.submitTask} ${styles.submitTaskDisable}`
						}
						title={title}
						// onClick={requestNewTodo}
					></input>
				</div>
			</form>
		</>
	);
};

// `${styles.submitTask}``${styles.submitTaskDisable}`
