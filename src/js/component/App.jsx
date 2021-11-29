import React, { useState } from "react";

//create your first component
const App = () => {
	// Destructuracion de array retornado por el Hook useState
	// primer lugar es el estado, segundo lugar funcion que permite modificar el estado
	// dentro del useState() defino estado inicial
	const [counter, setCounter] = useState(10);
	const [amount, setAmount] = useState(5);

	// funciones que se ejecuta el eventListener
	const decreaseHandler = () => {
		// siempre modificar state mediante el setState
		// si el state depende de un estado previo usar la forma con funcion (prevState) => newState
		setCounter(prevState => prevState - amount);
	};

	const increaseHandler = () => {
		setCounter(prevState => prevState + amount);
	};

	const amountHandler = evento => {
		setAmount(parseInt(evento.target.value));
	};

	return (
		<>
			<h1>My counter</h1>
			<p>The actual value is {counter}</p>
			<label htmlFor="amount">Modify by: </label>
			<input
				id="amount"
				type="number"
				value={amount}
				onChange={amountHandler}
			/>
			<button onClick={decreaseHandler}>Decrease</button>
			<button onClick={increaseHandler}>Increase</button>
		</>
	);
};

export default App;
