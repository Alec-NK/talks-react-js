import { Col } from 'antd';

interface DescriptionProps {
	children: string;
}

export function Description({ children }: Readonly<DescriptionProps>) {
	return (
		<Col span={24}>
			<span style={{ textAlign: 'justify' }}>{children}</span>
		</Col>
	);
}
