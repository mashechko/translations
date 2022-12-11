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
`;

export const PageBody = styled.div`
	padding: 40px;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr 3fr;
`;
