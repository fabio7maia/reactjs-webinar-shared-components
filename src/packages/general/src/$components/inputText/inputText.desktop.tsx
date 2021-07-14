import React from 'react';
import { css } from '@emotion/css';
import { Block } from '../block';
import { InputTextProps } from './inputText';
import { useInputTextHelper } from './inputTextHelper.hook';

export const InputTextDesktop: React.FC<InputTextProps> = (props) => {
  const { label, name, style, value } = props;
  const { onChange } = useInputTextHelper(props);

  return (
    <Block style={{ border: '2px solid #000', padding: '10px', borderRadius: '10px' }}>
      <Block>
        <label htmlFor={name} className={css({ fontSize: '18px' })}>
          {label}
        </label>
      </Block>
      <Block style={{ padding: '5px 0 0 0' }}>
        <input
          className={css({ outline: 'none', border: 'none', fontSize: '18px', ...style })}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Block>
    </Block>
  );
};
