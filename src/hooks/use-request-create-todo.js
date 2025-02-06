import { useState } from "react";

export const useRequestCreateTodo = (newTodo, refreshTodos) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodo = () => {
		setIsCreating(true);
		fetch("http://localhost:3004/todos", {
			method: "POST",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				title: `${newTodo}`,
				completed: false,
			}),
		})
			.then((loadedData) => loadedData.json())
			.then((loadedTodoes) => {
				console.log("пост добавлен, ответ сервера:", loadedTodoes);
				refreshTodos();
			})
			.finally(setIsCreating(false));
	};

	return { requestAddTodo };
};
