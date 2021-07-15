import React from 'react';
import { css } from '@emotion/css';
import { useTheme } from '@reactjs-webinar/theme/dist/hooks';
import { Block } from '../block';
import { InputTextProps } from './inputText';
import { useInputTextHelper } from './inputTextHelper.hook';

export const InputTextMobile: React.FC<InputTextProps> = (props) => {
  const { label, name, style, value } = props;
  const { onChange } = useInputTextHelper(props);
  const theme = useTheme();

  return (
    <Block
      style={{
        border: `1px solid ${theme.colors.border}`,
        padding: '5px',
        borderRadius: '5px',
        backgroundColor: theme.colors.background,
        color: theme.colors.default
      }}>
      <Block>
        <label htmlFor={name} className={css({ fontWeight: 700 })}>
          {label}
        </label>
      </Block>
      <Block style={{ padding: '5px 0 0 0' }}>
        <input
          className={css({
            outline: 'none',
            border: 'none',
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
