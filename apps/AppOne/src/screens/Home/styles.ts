import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const DogsList = styled(
  FlatList as new (props: FlatListProps<string>) => FlatList<string>,
).attrs(() => ({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: {
    flexGrow: 1,
    padding: 16,
    gap: 16,
  },
}))``;
