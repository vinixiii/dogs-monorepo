import React from 'react';

import { Container, Content, Image } from './styles';

interface DogCardProps {
  imageUrl: string;
}

function DogCard({ imageUrl }: DogCardProps) {
  return (
    <Container>
      <Content>
        <Image source={{ uri: imageUrl }} />
      </Content>
    </Container>
  );
}

export default DogCard;
