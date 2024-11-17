import React, { PropsWithChildren } from 'react';
import { Text } from './styles';

interface TitleProps extends PropsWithChildren {}

function Title({ children }: TitleProps) {
  return <Text>{children}</Text>;
}

export default Title;
