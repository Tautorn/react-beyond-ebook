import {memo } from 'react'

import logoPath from '../../commons/assets/images/logo-1.png'

import { LoadingStyled, ContainerStyled, CircularIconStyled, LogoStyled } from './styles'

export const Loading = ({
  children,
  full = false,
  width = '100%',
  height = '100%',
}) => {
  return (
    <LoadingStyled $full={full} $width={width} $height={height}>
      <ContainerStyled>
        <CircularIconStyled />
        <LogoStyled src={logoPath} />
      </ContainerStyled>
      {children}
    </LoadingStyled>
  )
}

export default memo(Loading)