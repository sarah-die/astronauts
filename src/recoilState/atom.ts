// do not mix with react-query
// react-query: saves states that are fetched from api and to mutate those
// recoil: saves states that are important on client side e.g. selections / dark mode / authentication

import { atom } from 'recoil';

export const selectedAstronaut = atom({
  key: 'selectedAstronaut',
  default: '' as string,
});

export const astronautFilter = atom({
  key: 'astronautFilter',
  default: 'all' as string,
});

export const colorScheme = atom({
  key: 'colorScheme',
  default: 'light' as string,
});

export const searchParamAgencyState = atom({
  key: 'searchParamAgencyState',
  default: '' as string,
});

export const astronautLoadingState = atom({
  key: 'astronautLoadingState',
  default: true as boolean,
});
