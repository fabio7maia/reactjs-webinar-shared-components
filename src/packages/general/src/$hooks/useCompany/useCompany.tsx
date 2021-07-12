import { Company } from '../../$consts';
import { useAppRootContext } from '../../$components';

export const useCompany = (): Company => {
  const { company } = useAppRootContext();

  return company;
};
