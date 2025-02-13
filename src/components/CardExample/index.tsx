import { ActionButton, Container, Image, Tag } from './styles';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

interface CardExampleProps {
	title: string;
	description: string;
	imageUrl?: string;
	imageAlt?: string;
	tags?: string[];
	date?: string;
	isEditable?: boolean;
	isDeletable?: boolean;
	isShareable?: boolean;
	onEdit?: () => void;
	onDelete?: () => void;
	onShare?: () => void;
}

export function CardExample({
	title,
	description,
	imageUrl,
	imageAlt,
	tags,
	date,
	isEditable,
	isDeletable,
	isShareable,
	onEdit,
	onDelete,
	onShare,
}: Readonly<CardExampleProps>) {
	const formattedDate = date ? new Date(date).toLocaleDateString() : '';

	return (
		<Container gutter={[0, 20]}>
			{imageUrl && (
				<Col span={24}>
					<Image src={imageUrl} alt={imageAlt} />
				</Col>
			)}
			<Col span={24}>
				<Row gutter={[0, 15]}>
					<Col span={24}>
						<Title level={2} style={{ marginTop: 0 }}>
							{title}
						</Title>
					</Col>
					<Col span={24}>
						<span>{description}</span>
					</Col>
				</Row>
			</Col>
			{tags && tags.length > 0 && (
				<Col span={24}>
					<Row
						gutter={[10, 0]}
						style={{
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						{tags.map((tag, index) => (
							<Col>
								<Tag key={index}>{tag}</Tag>
							</Col>
						))}
					</Row>
				</Col>
			)}
			{date && (
				<Col span={24}>
					<span style={{ color: '#666' }}>Criado em {formattedDate}</span>
				</Col>
			)}
			<Col span={24}>
				<Row
					gutter={[10, 0]}
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					{isEditable && (
						<Col>
							<ActionButton color="#0066cc" onClick={onEdit}>
								Editar
							</ActionButton>
						</Col>
					)}
					{isDeletable && (
						<Col>
							<ActionButton color="#dc3545" onClick={onDelete}>
								Excluir
							</ActionButton>
						</Col>
					)}
					{isShareable && (
						<Col>
							<ActionButton color="#28a745" onClick={onShare}>
								Compartilhar
							</ActionButton>
						</Col>
					)}
				</Row>
			</Col>
		</Container>
	);
}
