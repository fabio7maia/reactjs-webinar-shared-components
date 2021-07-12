import { Company, Language, Platform } from '../$types';

export interface WriteStoryInput {
  module: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  args?: Record<string, Record<string, any>>;
}

export interface WriteStoryOutput {
  meta: Record<string, any>;
  template: ({ props }) => React.ReactNode;
  stories: Record<string, any>;
}

export interface ContextProps {
  globals: { company: Company; language: Language; platform: Platform };
}
