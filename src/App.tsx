import { Col, Row } from 'antd';
import { Card } from './components/Card';
import heros from './data/heros.json';

export function App() {
	const data = heros[0];

	function handleOnEdit() {
		alert('Editar');
	}

	function handleOnDelete() {
		alert('Excluir');
	}

	function handleOnShare() {
		alert('Compartilhar');
	}

	return (
		<Row wrap style={{ padding: '20px', display: 'flex', flexDirection: 'row' }} gutter={[20, 20]}>
			{/* <Col span={8}>
				<CardExample
					title={data.title}
					description={data.description}
					imageUrl={data.imageUrl}
					imageAlt={data.imageAlt}
					tags={data.tags}
					date={data.date}
					isEditable
					isDeletable
					isShareable
					onEdit={handleOnEdit}
					onDelete={handleOnDelete}
					onShare={handleOnShare}
				/>
			</Col> */}
			<Col>
				<Card.Root>
					<Card.Image src={data.imageUrl} alt={data.imageAlt} />
					<Card.Content>
						<Card.Title>{data.title}</Card.Title>
						<Card.Description>{data.description}</Card.Description>
						<Card.Tags items={data.tags} />
						<Card.DateText>{data.date}</Card.DateText>
					</Card.Content>
					<Card.Footer>
						<Card.Actions>
							<Card.ActionButton color="#0066cc" onClick={handleOnEdit}>
								Editar
							</Card.ActionButton>
							<Card.ActionButton color="#dc3545" onClick={handleOnDelete}>
								Excluir
							</Card.ActionButton>
							<Card.ActionButton color="#28a745" onClick={handleOnShare}>
								Compartilhar
							</Card.ActionButton>
						</Card.Actions>
					</Card.Footer>
				</Card.Root>
			</Col>
		</Row>
	);
}
