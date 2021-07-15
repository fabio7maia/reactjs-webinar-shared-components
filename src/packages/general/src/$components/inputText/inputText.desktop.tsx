import React from 'react';
import { css } from '@emotion/css';
import { useTheme } from '@reactjs-webinar/theme/dist/hooks';
import { Block } from '../block';
import { InputTextProps } from './inputText';
import { useInputTextHelper } from './inputTextHelper.hook';

export const InputTextDesktop: React.FC<InputTextProps> = (props) => {
  const { label, name, style, value } = props;
  const { onChange } = useInputTextHelper(props);
  const theme = useTheme();

  return (
    <Block
      style={{
        border: `2px solid ${theme.colors.border}`,
        padding: '5px',
        borderRadius: '10px',
        backgroundColor: theme.colors.background,
        color: theme.colors.default
      }}>
      <Block>
        <label htmlFor={name} className={css({ fontSize: '18px', fontWeight: 700 })}>
          {label}
        </label>
      </Block>
      <Block style={{ padding: '5px 0 0 0' }}>
        <input
          className={css({
            outline: 'none',
            border: 'none',
            fontSize: '18px',
            backgroundColor: theme.colors.background,
            color: theme.colors.default,
            ...style
          })}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Block>
    </Block>
  );
};
