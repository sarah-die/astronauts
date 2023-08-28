// do not mix with react-query
// react-query: saves states that are fetched from api and to mutate those
// recoil: saves states that are important on client side e.g. selections / dark mode / authentication
import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false as boolean,
});

export const searchParamAgencyState = atom({
  key: 'searchParamAgencyState',
  default: null as number | null,
});

export const astronautLoadingState = atom({
  key: 'astronautLoadingState',
  default: true as boolean,
});

export const languageState = atom({
  key: 'languageState',
  default: 'en',
});

export const currPathState = atom({
  key: 'currPathState',
  default: '' as string,
});
