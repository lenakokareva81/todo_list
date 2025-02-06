export const SortAlphabet = (todoes, isAlphabet) => {
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
	return sortAlphabet;
};
