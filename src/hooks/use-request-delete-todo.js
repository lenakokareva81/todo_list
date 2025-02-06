import { useState } from "react";
export const useRequestDeleteTodo = (refreshTodos, setIsDeleting) => {
	const deleteTodo = ({ id }) => {
		setIsDeleting(true);

		fetch(`http://localhost:3004/todos/${id}`, {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("todo удалён, ответ сервера: ", response);
				refreshTodos();
			})
			.finally(() => setIsDeleting(false));
	};

	return { deleteTodo };
};
