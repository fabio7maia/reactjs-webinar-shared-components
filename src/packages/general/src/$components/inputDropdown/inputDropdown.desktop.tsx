import React from 'react';
import { css } from '@emotion/css';
import ReactSelect from 'react-select';
import { useTheme } from '@reactjs-webinar/theme/dist/hooks';
import { InputDropdownProps } from './inputDropdown';
import { useInputDropdownHelper } from './inputDropdownHelper.hook';

export const InputDropdownDesktop: React.FC<InputDropdownProps> = (props) => {
  const { label, name, style, items } = props;
  const { onChange, selectedItem } = useInputDropdownHelper(props);
  const theme = useTheme();

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
          border: `2px solid ${theme.colors.border}`,
          borderRadius: '10px',
          height: '64px',
          ...style
        }),
        valueContainer: (provided) => ({
          ...provided,
          fontSize: '18px'
        }),
        placeholder: (provided) => ({
          ...provided,
          fontSize: '18px',
          fontWeight: 700
        })
      }}
    />
  );
};
