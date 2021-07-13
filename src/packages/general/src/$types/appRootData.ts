import { Company } from './company';
import { Language } from './language';
import { Platform } from './platform';

export interface AppRootData {
  company: Company;
  language: Language;
  platform: Platform;
}
