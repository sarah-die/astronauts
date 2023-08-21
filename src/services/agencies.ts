import axios from 'axios';
import { AgencyData } from '../types';

const agencyApi = axios.create({
  baseURL: 'https://lldev.thespacedevs.com/2.2.0/agencies/',
  // baseURL: 'https://ll.thespacedevs.com/2.2.0/agencies/',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const getSearch = async (searchParam: string) => {
  const { data } = await agencyApi.get<AgencyData>(`?search=${searchParam}`);
  return data;
};
