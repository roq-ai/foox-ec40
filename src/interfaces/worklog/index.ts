import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface WorklogInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  hours?: number;
  value: string;
  freelancer_id: string;
  job_id: string;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface WorklogGetQueryInterface extends GetQueryInterface {
  id?: string;
  value?: string;
  freelancer_id?: string;
  job_id?: string;
}
