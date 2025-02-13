import { ReactNode } from 'react';
import { Col, Row } from 'antd';

interface CardFooterProps {
	children: ReactNode;
}

export function Footer({ children }: CardFooterProps) {
	return (
		<Col span={24}>
			<Row gutter={[10, 15]} style={{ display: 'flex', flexDirection: 'column' }}>
				{children}
			</Row>
		</Col>
	);
}
