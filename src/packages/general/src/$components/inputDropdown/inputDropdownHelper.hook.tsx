import React from 'react';
import { InputDropdownProps } from './inputDropdown';

type UseInputDropdownHelperInput = InputDropdownProps;

interface UseInputDropdownHelperOutput {
  items: Array<any>;
  propNameLabel: string;
  propNameValue: string;
  selectedItem: any;
  valueDisplay: string;
  onChange: (selectedItem: any) => void;
}

export const useInputDropdownHelper = (
  props: UseInputDropdownHelperInput
): UseInputDropdownHelperOutput => {
  const { onChange, items = [], value, propNameLabel = 'label', propNameValue = 'value' } = props;

  const handleOnChange = React.useCallback(
    (selectedItem: any) => {
      onChange?.(selectedItem ? selectedItem[propNameValue] : undefined);
    },
    [onChange, propNameValue]
  );

  const selectedItem = items.find((x) => x && x[propNameValue] === value);
  const valueDisplay = selectedItem ? selectedItem[propNameLabel] : '';

  return {
    items,
    propNameLabel,
    propNameValue,
    selectedItem,
    valueDisplay,
    onChange: handleOnChange
  };
};
