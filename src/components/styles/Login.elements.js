import styled from 'styled-components';
import {Container} from '../../GlobalStyle';



export const Btn = styled.button`
	border-radius: 5px;
	background: ${({ primary }) => (primary ? '#3366ff' : '#ff3300')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: white;
	font-size: ${({ fontbig }) => (fontbig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	padding: 2px;

	&:hover {
		transition: all 0.3s ease-out;
		background: white;
		background: ${({ primary }) => (primary ? '#ff3300' : '#3366ff')};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;


export const LogInBtn = styled(Btn)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border-left: 5px;
	outline: none;

	${Btn}
`;

export const StyledFormSection = styled.section`
	background: white;
	border-radius: 4px;
	height: 25%;
	width: 100%;
	padding: 5%;
	margin-right: 10%;
	margin-left: 10%;
	



`;

export const StyledForm = styled.form``;

export const StyledInput = styled.input``;

export const StyledTextArea = styled.textarea``;

export const StyledButton = styled.button``;

export const StyledFieldset = styled.fieldset``;