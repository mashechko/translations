import styled from 'styled-components';

export const PageLayout = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PageHeader = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #969bab;
	gap: 32px;
`;

export const PageBody = styled.div`
	padding: 40px;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr 3fr;
`;

export const Button = styled.button`
	height: 40px;
	width: 128px;
	display: grid;
	place-content: center;
	border-radius: 12px;
	background-color: #8c30f5;
	color: white;
	font-weight: 600;
`;
