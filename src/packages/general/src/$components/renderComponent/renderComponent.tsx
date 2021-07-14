import React from 'react';
import { Company, Platform } from '../../$types';
import { useCompany, usePlatform } from '../../$hooks';

type ValuesOfPlatform = { [key in Platform]?: React.ReactNode };

export interface RenderComponentPlatform extends ValuesOfPlatform {
  default?: React.ReactNode;
}

type ValuesOfCompany = { [key in Company]?: RenderComponentPlatform };

export interface RenderComponentCompany extends ValuesOfCompany {
  default?: RenderComponentPlatform;
}

export interface RenderComponentProps {
  components: RenderComponentCompany;
}

export const RenderComponent: React.FC<RenderComponentProps> = ({ components }) => {
  const company = useCompany();
  const platform = usePlatform();

  let component: React.ReactNode = <></>;

  if (components[company]) {
    component = components[company]?.[platform] || components[company]?.['default'];
  } else if (components['default']) {
    component = components['default'][platform] || components['default']['default'];
  }

  return <>{component}</>;
};
