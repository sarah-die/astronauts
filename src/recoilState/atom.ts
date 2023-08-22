// do not mix with react-query
// react-query: saves states that are fetched from api and to mutate those
// recoil: saves states that are important on client side e.g. selections / dark mode / authentication
import { atom } from 'recoil';

export const colorScheme = atom({
  key: 'colorScheme',
  default: 'light' as string,
});

// ToDo combine both states -> modal is open, when !undefined
export const searchParamAgencyState = atom({
  key: 'searchParamAgencyState',
  default: undefined as number | undefined,
});

export const modalOpenState = atom({
  key: 'modalOpenState',
  default: false as boolean,
});

export const astronautLoadingState = atom({
  key: 'astronautLoadingState',
  default: true as boolean,
});
