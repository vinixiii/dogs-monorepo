import { CoreUseCases } from 'core';
import { DogsList } from 'dogs';
import React, { useEffect, useState } from 'react';
import { Title } from 'ui';
import { Container } from './styles';

const { getDogImagesUseCase } = CoreUseCases;

const breed = 'Beagle';

function Home(): React.JSX.Element {
  const [dogImages, setDogImages] = useState<string[]>([]);

  const fetchDogImages = async () => {
    try {
      const images = await getDogImagesUseCase({ breed: breed.toLowerCase() });

      setDogImages(images);
    } catch (error) {
      console.error('Error fetching dog images:', error);
    }
  };

  useEffect(() => {
    fetchDogImages();
  }, []);

  return (
    <Container>
      <DogsList
        dogImages={dogImages}
        ListHeaderComponent={<Title>AppTwo - {breed}</Title>}
      />
    </Container>
  );
}

export default Home;
