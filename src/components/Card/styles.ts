import { Button, Row } from 'antd';
import styled from 'styled-components';

type ButtonProps = {
	color?: string;
};

export const Container = styled(Row)`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	max-width: 400px;
	border-radius: 0.5rem;
	text-align: justify;
	border: 1px solid #ccc;
	background-color: #fff;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Tag = styled.div`
	background-color: #e7e7e7;
	padding: 0.5rem;
	border-radius: 0.5rem;
	font-size: 0.8rem;
`;

export const CustomImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 0.5rem;
`;

export const CustomButton = styled(Button)<ButtonProps>`
	cursor: pointer;
	font-size: 1rem;
	background: none;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
	color: ${({ color }) => color};
	border: 1px solid ${({ color }) => color};

	&:hover {
		background-color: ${({ color }) => color};
		color: #fff;
		transition: all 0.2s ease;
	}
`;
