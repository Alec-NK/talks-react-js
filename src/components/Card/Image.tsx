import { Col } from 'antd';
import { CustomImage } from './styles';

interface CardImageProps {
	src: string;
	alt: string;
}

export function Image({ src, alt }: CardImageProps) {
	return (
		<Col span={24}>
			<CustomImage src={src} alt={alt} />
		</Col>
	);
}
