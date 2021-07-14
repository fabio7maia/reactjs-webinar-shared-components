import React from 'react';
import { InputTextProps } from './inputText';

type UseInputTextHelperInput = InputTextProps;

interface UseInputTextHelperOutput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useInputTextHelper = (props: UseInputTextHelperInput): UseInputTextHelperOutput => {
  const { onChange } = props;

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      onChange?.(value);
    },
    [onChange]
  );

  return {
    onChange: handleOnChange
  };
};
