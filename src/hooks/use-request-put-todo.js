import { useState } from "react";
export const useRequestPutTodo = (refreshTodos, setIsLoading) => {
	const completeTodo = ({ id, title, completed }) => {
		console.log(id, title, completed);

		setIsLoading(true);
		fetch(`http://localhost:3004/todos/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				title: title,
				completed: completed,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("todo изменен: ", response);
				refreshTodos();
			})
			.finally(() => setIsLoading(false));
	};

	return { completeTodo };
};
