import React, { FC } from 'react';
import { ContainerMain, ContainerChildren } from './styled';

interface Props {
  children: JSX.Element,
}

const Layout: FC<Props> = ({ children }: Props): React.ReactElement => {

  return (
    <ContainerMain>
      <ContainerChildren>
        {children}
      </ContainerChildren>
    </ContainerMain>
  );
};

export default Layout;

