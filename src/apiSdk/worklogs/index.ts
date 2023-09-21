import axios from 'axios';
import queryString from 'query-string';
import { WorklogInterface, WorklogGetQueryInterface } from 'interfaces/worklog';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWorklogs = async (query?: WorklogGetQueryInterface): Promise<PaginatedInterface<WorklogInterface>> => {
  const response = await axios.get('/api/worklogs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createWorklog = async (worklog: WorklogInterface) => {
  const response = await axios.post('/api/worklogs', worklog);
  return response.data;
};

export const updateWorklogById = async (id: string, worklog: WorklogInterface) => {
  const response = await axios.put(`/api/worklogs/${id}`, worklog);
  return response.data;
};

export const getWorklogById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/worklogs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWorklogById = async (id: string) => {
  const response = await axios.delete(`/api/worklogs/${id}`);
  return response.data;
};
