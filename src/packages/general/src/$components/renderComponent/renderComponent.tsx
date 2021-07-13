import React from 'react';
import { Company, Platform } from '../../$types';
import { useCompany, usePlatform } from '../../$hooks';

export interface RenderComponentProps {
  components: Record<Company & 'default', Record<Platform & 'default', JSX.Element>>;
}

export const RenderComponent: React.FC<RenderComponentProps> = ({ components }) => {
  const company = useCompany();
  const platform = usePlatform();

  let component: JSX.Element = <></>;

  if (components[company]) {
    component = components[company][platform] || components[company]['default'];
  } else if (components['default']) {
    component = components['default'][platform] || components['default']['default'];
  }

  return <>{component}</>;
};
