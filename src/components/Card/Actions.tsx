import { ReactNode } from 'react';
import { Col, Row } from 'antd';

interface CardActionsProps {
	children: ReactNode;
}

export function Actions({ children }: CardActionsProps) {
	return (
		<Col span={24}>
			<Row gutter={[10, 0]} style={{ display: 'flex', flexDirection: 'row' }}>
				{children}
			</Row>
		</Col>
	);
}
