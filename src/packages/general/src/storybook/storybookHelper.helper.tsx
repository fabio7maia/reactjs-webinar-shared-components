import React from 'react';
import { Theme } from '@reactjs-webinar/theme';
import { company1Theme, company2Theme } from '@reactjs-webinar/theme/dist/consts';
import { AppRoot } from '../$components';
import { ContextProps, WriteStoryInput, WriteStoryOutput } from './storybookHelper.types';
import { Company } from '../types';

export class StorybookHelper {
  static writeStory(input: WriteStoryInput): WriteStoryOutput {
    const { args, component: Component, module } = input;
    const template = (props: React.ReactNode): React.ReactNode => <Component {...props} />;

    const stories = {};

    if (args) {
      Object.keys(args).forEach((elem) => {
        stories[elem] = template.bind({});
        stories[elem].args = args[elem];
      });
    }

    const ret = {
      meta: {
        title: `${module}/${Component.displayName}`,
        component: Component,
        decorators: [
          (story: () => React.ReactNode, context: ContextProps): React.ReactNode => {
            return (
              <AppRoot
                {...{
                  company: context.globals.company,
                  language: context.globals.language,
                  platform: context.globals.platform
                }}>
                <Theme
                  theme={
                    context.globals.company === Company.company1 ? company1Theme : company2Theme
                  }>
                  {story()}
                </Theme>
              </AppRoot>
            );
          }
        ]
      },
      template,
      stories
    };

    return ret;
  }
}
