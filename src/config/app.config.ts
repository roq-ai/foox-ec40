interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelancer profile', 'Apply for jobs', 'Update worklog', 'Manage applications'],
  ownerAbilities: ['Manage hiring process', 'Manage freelancer profiles', 'Manage worklogs', 'Manage users'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a0d0ec90-88c4-4d8a-8cfb-9ae968368276',
};
