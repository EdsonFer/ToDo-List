import { useState } from 'react';
import { Item } from '../../interface/Item';
import { Container } from './style';

interface ListItemProps {
	item: Item;
	onChange: (id: number, done: boolean) => void;
}

export function ListItem({ item, onChange }: ListItemProps) {
	const [isChecked, setIsChecked] = useState(item.done);

	return (
		<Container done={isChecked}>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={event => setIsChecked(event.target.checked)}
			/>
			<label> {item.name} </label>
		</Container>
	);
}
