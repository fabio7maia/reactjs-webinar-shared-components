import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Example } from '../example';

// describe('<AppRoot />', () => {
// 	it('component should be defined and render', () => {
// 		const wrapper = mount(
// 			<AppRoot
// 				globalData={{
// 					company: Company.bcp,
// 					language: Language.pt,
// 					platform: Platform.mobile,
// 				}}
// 			/>
// 		);

// 		expect(wrapper.find(AppRoot)).toBeDefined();
// 		expect(wrapper.find(AppRoot)).toHaveLength(1);
// 	});
// });

test('default', async () => {
  render(<Example />);

  expect(screen).toBeDefined();
});
