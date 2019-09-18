import React from 'react';
import styled, { css } from 'styled-components';

export interface HeadingProps {
  children: React.ReactChild;
  center?: boolean;
}

const base = css`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  ${(props: HeadingProps): string =>
    props.center ? 'text-align: center;' : ''}
`;

export const H1 = styled.h1<HeadingProps>`
  ${base};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

export const H2 = styled.h2<HeadingProps>`
  ${base};
  font-size: 1.4rem;
`;

export const H3 = styled.h3<HeadingProps>`
  ${base};
  font-size: 1.2rem;
`;

export const H4 = styled.h4<HeadingProps>`
  ${base};
  font-size: 1.1rem;
`;

export const H5 = styled.h5<HeadingProps>`
  ${base};
  font-size: 1rem;
`;

export const H6 = styled.h6<HeadingProps>`
  ${base};
  font-size: 1rem;
`;
