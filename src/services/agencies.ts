import axios from 'axios';
import { AgencyDetail } from '../types';

const agencyApi = axios.create({
  baseURL: 'https://lldev.thespacedevs.com/2.2.0/agencies/',
  // baseURL: 'https://ll.thespacedevs.com/2.2.0/agencies/',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const getById = async (agencyId: number | undefined) => {
  const { data } = await agencyApi.get<AgencyDetail>(`/${agencyId}`);

  return data;
};
