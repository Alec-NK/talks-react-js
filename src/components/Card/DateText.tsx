import { Col } from 'antd';

interface DateTextProps {
	children: string;
}

export function DateText({ children }: Readonly<DateTextProps>) {
	const formattedDate = new Date(children).toLocaleDateString();

	return (
		<Col span={24}>
			<span style={{ color: '#666' }}>Criado em {formattedDate}</span>
		</Col>
	);
}
