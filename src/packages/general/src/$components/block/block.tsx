import React from 'react';
import { css } from '@emotion/css';

export interface BlockProps {
  style?: React.CSSProperties;
}

export const Block: React.FC<BlockProps> = ({ children, style }) => {
  return (
    <div
      className={css({
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        ...style
      })}>
      {children}
    </div>
  );
};
