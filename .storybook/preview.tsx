import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters } from '@storybook/react';
import anysort from 'anysort';

addParameters({
  layout: 'fullscreen',
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  },
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showRoots: true,
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous;
      const [nextStory, nextMeta] = next;

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Overview/Introduction',
        'Overview/Getting Started',
        'Overview/Themes',
        'Overview/**',
        'Components/**'
      ]);
    }
  }
});

export const globalTypes = {
  language: {
    name: 'Language',
    description: 'Change the language of component preview',
    defaultValue: 'pt',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'pt', title: 'PT - Portuguese' },
        { value: 'en', title: 'EN - English' }
      ]
    }
  },
  company: {
    name: 'Company',
    description: 'Change the company of component preview',
    defaultValue: 'company1',
    toolbar: {
      icon: 'admin',
      items: [
        { value: 'company1', title: 'Company 1' },
        { value: 'company2', title: 'Company 2' }
      ]
    }
  },
  platform: {
    name: 'Platform',
    description: 'Change the platform of component preview',
    defaultValue: 'mobile',
    toolbar: {
      icon: 'browser',
      items: [
        { value: 'mobile', title: 'Mobile - App and browser mobile devices' },
        { value: 'desktop', title: 'Desktop - Tablets and PC devices' }
      ]
    }
  }
};
