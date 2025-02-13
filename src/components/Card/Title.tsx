import { Col, Typography } from 'antd';

interface CardTitleProps {
	children: string;
}

export function Title({ children }: CardTitleProps) {
	return (
		<Col span={24}>
			<Typography.Title level={2} style={{ margin: 0 }}>
				{children}
			</Typography.Title>
		</Col>
	);
}
