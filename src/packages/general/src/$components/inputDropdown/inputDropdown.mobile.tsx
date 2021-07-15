import React from 'react';
import { css } from '@emotion/css';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import { useTheme } from '@reactjs-webinar/theme/dist/hooks';
import { Block } from '../block';
import { InputDropdownProps } from './inputDropdown';
import { useInputDropdownHelper } from './inputDropdownHelper.hook';

export const InputDropdownMobile: React.FC<InputDropdownProps> = (props) => {
  const { label, name, style } = props;
  const { onChange, valueDisplay, items, propNameLabel, propNameValue, selectedItem } =
    useInputDropdownHelper(props);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleOnClickOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleOnClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Block
        style={{
          border: `1px solid ${theme.colors.border}`,
          padding: '5px',
          borderRadius: '5px',
          backgroundColor: theme.colors.background,
          color: theme.colors.default
        }}
        onClick={handleOnClickOpen}>
        <Block>
          <label htmlFor={name} className={css({ fontWeight: 700 })}>
            {label}
          </label>
        </Block>
        <Block style={{ padding: '5px 0 0 0', height: '23px' }}>{valueDisplay}</Block>
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
