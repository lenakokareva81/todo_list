import styles from "./todos.module.css";
import { Input } from "../input/input";
import { SortAlphabet } from "../../function/sortAlphabet";

export const Todoes = ({
	todoes,
	isLoading,
	deleteTodo,
	completeTodo,
	setIsCreating,
	changeIdTodo,
	changeTodo,
	setChangeTodo,
	setChangeIdTodo,
	searchTodo,
	isAlphabet,
}) => {
	const onDeleteTodo = (id) => {
		deleteTodo((id = { id }));
	};
	const onCompleteTodo = (id, title, completed) => {
		completeTodo({ id, title, completed: !completed });
	};
	const onChangeTodo = (id, title, completed) => {
		setChangeIdTodo(id);
		setChangeTodo(title);
	};
	const onBlur = (id, changeTodo, completed) => {
		completeTodo({ id, title: changeTodo, completed });
		setChangeIdTodo(0);
	};
	const sortAlphabet = (todoes, isAlphabet) => {
		if (isAlphabet) {
			return todoes.sort(function (a, b) {
				if (a.title < b.title) {
					return -1;
				}
				if (a.title > b.title) {
					return 1;
				}
				return 0;
			});
		} else {
			return todoes.sort(function (a, b) {
				if (a.id < b.id) {
					return -1;
				}
				if (a.id > b.id) {
					return 1;
				}
				return 0;
			});
		}
	};
	return (
		<>
			<ul className={styles.taskList}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					sortAlphabet(todoes, isAlphabet)
						.filter(({ id, title, completed }) => {
							if (
								searchTodo.length > 3 &&
								title.includes(searchTodo)
							) {
								return { id, title, completed };
							}
							if (searchTodo.length <= 3) {
								return { id, title, completed };
							}
						})
						.map(({ id, title, completed }) => (
							<>
								(
								{changeIdTodo === id ? (
									<form
										onSubmit={() =>
											onBlur(id, changeTodo, completed)
										}
									>
										<Input
											todo={changeTodo}
											setTodo={setChangeTodo}
											setIsCreating={setIsCreating}
											onBlur={() =>
												onBlur(
													id,
													changeTodo,
													completed,
												)
											}
										></Input>
									</form>
								) : (
									<li className={styles.taskListItem}>
										<label
											className={styles.taskListItemLabel}
										>
											<input
												type="checkbox"
												checked={completed}
												onClick={() =>
													onCompleteTodo(
														id,
														title,
														completed,
													)
												}
											></input>

											<span>{title}</span>
										</label>

										<div className={styles.containerBtn}>
											<span
												className={styles.deleteBtn}
												title="Delete Task"
												onClick={() => onDeleteTodo(id)}
											></span>
											<span
												className={styles.editBtn}
												title="edit Task"
												onClick={() =>
													onChangeTodo(
														id,
														title,
														completed,
													)
												}
											></span>
										</div>
									</li>
								)}
								)
							</>
						))
				)}
			</ul>
		</>
	);
};
