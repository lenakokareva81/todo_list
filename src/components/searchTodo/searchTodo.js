import styles from "./searchTodo.module.css";
import { Input } from "../input/input";

export const SearchTodo = ({
	placeholder,
	isCreating,
	setIsCreating,
	searchTodo,
	setSearchTodo,
}) => {
	const requestNewTodo = () => {
		// if (searchTodo > 3) {
		// 	requestAddTodo(newTodo);
		// 	setNewToto("");
		// 	setIsCreating(false);
		// }
	};

	return (
		<>
			<form onSubmit={requestNewTodo}>
				<div className={styles.addTask}>
					<Input
						placeholder={placeholder}
						todo={searchTodo}
						setTodo={setSearchTodo}
						setIsCreating={setIsCreating}
					></Input>

					<input
						type="submit"
						value=""
						className={
							isCreating
								? styles.searchTask
								: `${styles.searchTask} ${styles.submitTaskDisable}`
						}
					></input>
				</div>
			</form>
		</>
	);
};
