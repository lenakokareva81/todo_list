import { useState, useEffect } from "react";

export const useRequestGetTodoesPlaseholder = () => {
	const [todoes, setTodoes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((loadedData) => loadedData.json())
			.then((loadedTodoes) => {
				setTodoes(loadedTodoes);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return { todoes, setTodoes, isLoading };
};
