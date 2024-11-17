import React, { useCallback } from 'react';
import { FlatListProps, ListRenderItemInfo } from 'react-native';
import DogCard from './components/DogCard';
import { DogsFlatList } from './styles';

interface DogsListProps extends Partial<FlatListProps<string>> {
  dogImages: string[];
}

function DogsList({ dogImages, ...props }: DogsListProps) {
  const renderItem = useCallback(
    ({ item: imageUrl }: ListRenderItemInfo<string>) => (
      <DogCard imageUrl={imageUrl} />
    ),
    [],
  );

  return (
    <DogsFlatList
      {...props}
      data={dogImages}
      keyExtractor={imageUrl => imageUrl}
      renderItem={renderItem}
    />
  );
}

export default DogsList;
