import { Company } from '../../$types';
import { useAppRootContext } from '../../$components';

export const useCompany = (): Company => {
  const { company } = useAppRootContext();

  return company;
};
