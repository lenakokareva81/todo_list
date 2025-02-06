import styles from "./button-alphabet.module.css";

export const ButtonAlphabet = ({ setIsAlphabet, isAlphabet }) => {
	const onAlphabetPush = () => {
		setIsAlphabet(!isAlphabet);
	};
	return (
		<>
			<div className={styles.buttonsContainer}>
				<button
					className={
						isAlphabet
							? `${styles.buttonArounder} ${styles.buttonArounderPush}`
							: `${styles.buttonArounder}`
					}
					onClick={onAlphabetPush}
				>
					А-Я
				</button>
			</div>
		</>
	);
};
