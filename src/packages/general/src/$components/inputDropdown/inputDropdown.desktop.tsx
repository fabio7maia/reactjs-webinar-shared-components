import React from 'react';
import { css } from '@emotion/css';
import ReactSelect from 'react-select';
import { InputDropdownProps } from './inputDropdown';
import { useInputDropdownHelper } from './inputDropdownHelper.hook';

export const InputDropdownDesktop: React.FC<InputDropdownProps> = (props) => {
  const { label, name, style, items } = props;
  const { onChange, selectedItem } = useInputDropdownHelper(props);

  return (
    <ReactSelect
      name={name}
      onChange={onChange as any}
      value={selectedItem}
      options={items}
      placeholder={label}
      styles={{
        control: (provided) => ({
          ...provided,
          border: '2px solid #000',
          height: '50px',
          ...style
        })
      }}
    />
  );
};
