import React from 'react';
import { css } from '@emotion/css';

export interface BlockProps {
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Block: React.FC<BlockProps> = ({ children, onClick, style }) => {
  return (
    <div
      className={css({
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        ...style
      })}
      onClick={onClick}
      aria-hidden="true">
      {children}
    </div>
  );
};
