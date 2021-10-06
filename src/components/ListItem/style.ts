import styled from 'styled-components';

interface ContainerProps {
	done: boolean;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	align-items: center;

	background: var(--lista);
	padding: 0.5rem;
	border-radius: 0.5rem;
	margin-bottom: 0.5rem;

	input {
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 1rem;
	}

	label {
		color: var(--contentList);
		text-decoration: ${props => (props.done ? 'line-through ' : 'initial')};
	}
`;
