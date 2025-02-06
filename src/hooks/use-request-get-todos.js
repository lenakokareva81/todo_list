import { useState, useEffect } from "react";

export const useRequestGetTodoes = (
	refreshTodos,
	refreshTodosFlag,
	setIsLoading,
) => {
	const [todoes, setTodoes] = useState([]);

	//json-server --watch db.json --port 3004 --delay 2500 запуск сервера
	useEffect(() => {
		setIsLoading(true);
		fetch("http://localhost:3004/todos")
			.then((loadedData) => loadedData.json())
			.then((loadedTodoes) => {
				setTodoes(loadedTodoes);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag]);

	return { todoes, setTodoes };
};
