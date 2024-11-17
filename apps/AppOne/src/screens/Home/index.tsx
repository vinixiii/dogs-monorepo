import { CoreUseCases } from 'core';
import React, { useCallback, useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { DogCard, Title } from 'ui';
import { Container, DogsList } from './styles';

const { getDogImagesUseCase } = CoreUseCases;

const breed = 'Husky';

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

  const renderItem = useCallback(
    ({ item: imageUrl }: ListRenderItemInfo<string>) => (
      <DogCard imageUrl={imageUrl} />
    ),
    [],
  );

  useEffect(() => {
    fetchDogImages();
  }, []);

  return (
    <Container>
      <DogsList
        data={dogImages}
        keyExtractor={imageUrl => imageUrl}
        renderItem={renderItem}
        ListHeaderComponent={<Title>AppOne - {breed}</Title>}
      />
    </Container>
  );
}

export default Home;
