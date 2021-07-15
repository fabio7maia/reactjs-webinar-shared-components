import React from 'react';
import { css } from '@emotion/css';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import { Block } from '../block';
import { InputDropdownProps } from './inputDropdown';
import { useInputDropdownHelper } from './inputDropdownHelper.hook';

export const InputDropdownMobile: React.FC<InputDropdownProps> = (props) => {
  const { label, name, style } = props;
  const { onChange, valueDisplay, items, propNameLabel, propNameValue, selectedItem } =
    useInputDropdownHelper(props);
  const [open, setOpen] = React.useState(false);

  const handleOnClickOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleOnClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Block
        style={{ border: '1px solid #000', padding: '5px', borderRadius: '5px' }}
        onClick={handleOnClickOpen}>
        <Block>
          <label htmlFor={name}>{label}</label>
        </Block>
        <Block style={{ padding: '5px 0 0 0' }}>
          <input
            className={css({ outline: 'none', border: 'none', ...style })}
            name={name}
            value={valueDisplay}
            onChange={onChange}
          />
        </Block>
      </Block>
      <RcDrawer level={null} open={open} placement="bottom" onClose={handleOnClose} handler={<></>}>
        <Block style={{ padding: '20px' }}>
          <Block style={{ fontSize: '16px', fontWeight: 700 }}>{label}</Block>
          <Block style={{ margin: '30px 0 0 0' }}>
            {items.map((x) => (
              <Block
                key={x[propNameValue]}
                style={{ flexDirection: 'row', justifyContent: 'space-between', margin: '5px 0' }}
                onClick={() => {
                  onChange(x);
                  setOpen(false);
                }}>
                <Block>{x[propNameLabel]}</Block>
                <Block>
                  {selectedItem && selectedItem[propNameValue] === x[propNameValue] ? 'X' : ''}
                </Block>
              </Block>
            ))}
          </Block>
        </Block>
      </RcDrawer>
    </>
  );
};
