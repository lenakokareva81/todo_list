import { use, useEffect, useState } from "react";
import styles from "./App.module.css";
import {
	useRequestGetTodoes,
	useRequestCreateTodo,
	useRequestDeleteTodo,
	useRequestPutTodo,
} from "./hooks";
import { InputTodo } from "./components/inputTodo/input-todo";
import { SearchTodo } from "./components/searchTodo/searchTodo";
import { Todoes } from "./components/todoes/todos";
import { ButtonAlphabet } from "./components/button-alphabet/button-alphabet";

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [newCreateTodo, setNewCreateTodo] = useState(null);
	const [isCreating, setIsCreating] = useState(false);

	const [newTodo, setNewTodo] = useState("");
	const [changeTodo, setChangeTodo] = useState("");
	const [changeIdTodo, setChangeIdTodo] = useState(0);
	const [searchTodo, setSearchTodo] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [isAlphabet, setIsAlphabet] = useState(false);
	console.log("isAlphabet", isAlphabet);
	const refreshTodos = () => {
		setRefreshTodosFlag(!refreshTodosFlag);
	};

	const { requestAddTodo } = useRequestCreateTodo(
		newTodo,
		refreshTodos,
		refreshTodosFlag,
		newTodo,
		setNewTodo,
	);

	const { todoes } = useRequestGetTodoes(
		refreshTodos,
		refreshTodosFlag,
		setIsLoading,
	);
	const { completeTodo } = useRequestPutTodo(refreshTodos, setIsLoading);
	const { deleteTodo } = useRequestDeleteTodo(refreshTodos, setIsDeleting);

	return (
		<>
			<>
				<div className={styles.appContainer} id="taskList">
					<h1 className={styles.appHeader}>TO DO LIST</h1>
					<ButtonAlphabet
						setIsAlphabet={setIsAlphabet}
						isAlphabet={isAlphabet}
					></ButtonAlphabet>
					<InputTodo
						btn="submit"
						placeholder="Add New Task"
						title="Add Task"
						requestAddTodo={requestAddTodo}
						newTodo={newTodo}
						setNewTodo={setNewTodo}
						isCreating={isCreating}
						setIsCreating={setIsCreating}
					></InputTodo>
					<SearchTodo
						placeholder="search task"
						title="Add Task"
						isCreating={isCreating}
						setIsCreating={setIsCreating}
						searchTodo={searchTodo}
						setSearchTodo={setSearchTodo}
					></SearchTodo>
					{isDeleting || isLoading ? (
						<div className={styles.preloader}>
							<div className={styles.loader}>
								<div className={styles.smoke}>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div className={styles.cup}>
									<div className={styles.body}></div>
									<div className={styles.plate}></div>
									<div className={styles.hand}></div>
								</div>
							</div>
						</div>
					) : (
						<Todoes
							todoes={todoes}
							isLoading={isLoading}
							deleteTodo={deleteTodo}
							completeTodo={completeTodo}
							setNewTodo={setNewTodo}
							refreshTodos={refreshTodos}
							setIsCreating={setIsCreating}
							changeTodo={changeTodo}
							setChangeTodo={setChangeTodo}
							changeIdTodo={changeIdTodo}
							setChangeIdTodo={setChangeIdTodo}
							searchTodo={searchTodo}
							isAlphabet={isAlphabet}
						></Todoes>
					)}
				</div>
			</>
		</>
	);
};
