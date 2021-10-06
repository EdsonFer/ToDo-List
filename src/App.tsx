import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Container, Header } from './App.styles';
import { ListItem } from './components/ListItem';
import { Item } from './interface/Item';
import { AddArea } from './components/AddArea';

export function App() {
	const [list, setList] = useState<Item[]>([
		{ id: 1, name: 'Comprar o pão na padaria', done: false },
		{ id: 2, name: 'Comprar um bolo na padaria', done: true },
	]);

	const handleTaskChange = (id: number, done: boolean) => {
		let newList = [...list];
		for (let i in newList) {
			if (newList[i].id === id) {
				newList[i].done = done;
			}
		}
		setList(newList);
	};

	const handleAddTask = (taskName: string) => {
		let newList = [...list];
		newList.push({
			id: list.length + 1,
			name: taskName,
			done: false,
		});
		setList(newList);
	};

	return (
		<>
			<Container>
				<Header>Lista de Tarefas</Header>

				<AddArea onEnter={handleAddTask} />

				{list.map(item => (
					<ListItem item={item} key={item.id} onChange={handleTaskChange} />
				))}
			</Container>
			<GlobalStyle />
		</>
	);
}
