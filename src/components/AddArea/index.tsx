import { useState, KeyboardEvent } from 'react';
import { Container } from './style';

interface onEnterProps {
	onEnter: (taskName: string) => void;
}

export function AddArea({ onEnter }: onEnterProps) {
	const [inputText, setInputText] = useState('');

	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.code === 'Enter' && inputText !== '') {
			onEnter(inputText);
			setInputText('');
		}
	};

	return (
		<Container>
			<div className="image">➕</div>
			<input
				type="text"
				placeholder="Adicionar Tarefa"
				value={inputText}
				onChange={event => setInputText(event.target.value)}
				onKeyUp={handleKeyUp}
			/>
		</Container>
	);
}
