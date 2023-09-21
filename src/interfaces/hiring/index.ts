import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface HiringInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  freelancer_id?: string;
  job_id?: string;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface HiringGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  job_id?: string;
}
