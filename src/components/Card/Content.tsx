import { ReactNode } from 'react';
import { Col, Row } from 'antd';

interface CardContentProps {
	children: ReactNode;
}

export function Content({ children }: CardContentProps) {
	return (
		<Col span={24}>
			<Row gutter={[0, 15]} style={{ display: 'flex', flexDirection: 'column' }}>
				{children}
			</Row>
		</Col>
	);
}
