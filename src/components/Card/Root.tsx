import { ReactNode } from 'react';
import { Container } from './styles';

interface CardRootProps {
	children: ReactNode;
}

export function Root({ children }: CardRootProps) {
	return <Container gutter={[0, 25]}>{children}</Container>;
}
