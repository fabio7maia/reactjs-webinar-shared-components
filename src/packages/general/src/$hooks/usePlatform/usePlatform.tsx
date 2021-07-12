import { Platform } from '../../$consts';
import { useAppRootContext } from '../../$components';

export const usePlatform = (): Platform => {
  const { platform } = useAppRootContext();

  return platform;
};
