import React from 'react';
import { css } from '@emotion/css';
import { Block } from '../block';
import { InputTextProps } from './inputText';
import { useInputTextHelper } from './inputTextHelper.hook';

export const InputTextMobile: React.FC<InputTextProps> = (props) => {
  const { label, name, style, value } = props;
  const { onChange } = useInputTextHelper(props);

  return (
    <Block style={{ border: '1px solid #000', padding: '5px', borderRadius: '5px' }}>
      <Block>
        <label htmlFor={name}>{label}</label>
      </Block>
      <Block style={{ padding: '5px 0 0 0' }}>
        <input
          className={css({ outline: 'none', border: 'none', ...style })}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Block>
    </Block>
  );
};
