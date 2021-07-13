import { Platform } from '../../$types';
import { useAppRootContext } from '../../$components';

export const usePlatform = (): Platform => {
  const { platform } = useAppRootContext();

  return platform;
};
