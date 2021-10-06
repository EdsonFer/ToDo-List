import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid #555;
	border-radius: 1rem;
	padding: 0.6rem;
	margin: 1.25rem 0;

	display: flex;
	align-items: center;

	&:focus-within {
		border: 1px solid #fff;
		color: #fff;
	}

	.image {
		margin-right: 0.3rem;
	}

	input {
		flex: 1;

		font-size: 1.2rem;

		border: 0;
		background: transparent;
		color: #fff;
		outline: 0;
	}
`;
