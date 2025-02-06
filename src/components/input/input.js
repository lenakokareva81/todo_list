import styles from "./input.module.css";
export const Input = ({ placeholder, todo, setTodo, setIsCreating }) => {
	const updateNewToto = ({ target }) => {
		setTodo(target.value);
		setIsCreating(true);
	};

	return (
		<input
			type="text"
			placeholder={placeholder}
			value={todo}
			className={styles.taskInput}
			onChange={updateNewToto}
		></input>
	);
};
