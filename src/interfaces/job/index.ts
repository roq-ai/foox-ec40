import { ApplicationInterface } from 'interfaces/application';
import { HiringInterface } from 'interfaces/hiring';
import { WorklogInterface } from 'interfaces/worklog';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  status?: string;
  application?: ApplicationInterface[];
  hiring?: HiringInterface[];
  worklog?: WorklogInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
    hiring?: number;
    worklog?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  company_id?: string;
  status?: string;
}
