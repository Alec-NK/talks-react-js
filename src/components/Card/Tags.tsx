import { Col, Row } from 'antd';
import { Tag } from './styles';

interface CardTagsProps {
	items: string[];
}

export function Tags({ items }: CardTagsProps) {
	if (!items?.length) return null;

	return (
		<Col span={24}>
			<Row gutter={[10, 0]} style={{ display: 'flex', flexDirection: 'row' }}>
				{items.map((tag, index) => (
					<Col key={index}>
						<Tag>{tag}</Tag>
					</Col>
				))}
			</Row>
		</Col>
	);
}
