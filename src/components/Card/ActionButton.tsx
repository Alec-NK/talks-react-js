import { ReactNode } from 'react';
import { Col } from 'antd';
import { CustomButton } from './styles';

interface CardActionsButtonProps {
	color: string;
	onClick: () => void;
	children: ReactNode;
}

export function ActionButton({ color, onClick, children }: CardActionsButtonProps) {
	return (
		<Col>
			<CustomButton color={color} onClick={onClick}>
				{children}
			</CustomButton>
		</Col>
	);
}
