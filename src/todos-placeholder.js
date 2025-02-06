import styles from "./todos-placehplder.module.css";
import { useRequestGetTodoesPlaseholder } from "./hooks";

import { Todoes } from "./components/todoes/todos";
export const TodosPlaceholder = () => {
	const { todoes, isLoading } = useRequestGetTodoesPlaseholder();
	return (
		<div className={styles.appContainer} id="taskList">
			<h1 className={styles.appHeader}>TO DO LIST</h1>

			<Todoes todoes={todoes} isLoading={isLoading}></Todoes>
		</div>
	);
};
