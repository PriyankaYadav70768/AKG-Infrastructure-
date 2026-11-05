export const roles = [
  'Project Manager',
  'Site Engineer',
  'Civil Engineer',
  'Structural Engineer',
  'Quantity Surveyor',
  'Site Supervisor',
  'Safety Officer',
  'Architect',
  'Planning Engineer',
  'HR / Administration',
] as const;

export type RoleType = (typeof roles)[number];

export interface RoleOption {
  id: string;
  title: RoleType;
  description: string;
}

export const ROLES: RoleOption[] = [
  { id: 'project-manager', title: 'Project Manager', description: 'Overall execution, scheduling, cost & milestone delivery' },
  { id: 'site-engineer', title: 'Site Engineer', description: 'On-site technical supervision and day-to-day coordination' },
  { id: 'civil-engineer', title: 'Civil Engineer', description: 'Civil works structural alignment, grading & material validation' },
  { id: 'structural-engineer', title: 'Structural Engineer', description: 'Structural load analysis, framework design & integrity checks' },
  { id: 'quantity-surveyor', title: 'Quantity Surveyor', description: 'Estimation, bill of quantities (BOQ) & cost control' },
  { id: 'site-supervisor', title: 'Site Supervisor', description: 'Direct field workforce monitoring, safety & work progress' },
  { id: 'safety-officer', title: 'Safety Officer', description: 'HSE protocols, site safety audits & compliance inspection' },
  { id: 'architect', title: 'Architect', description: 'Design alignment, aesthetic standards & master plan coordination' },
  { id: 'planning-engineer', title: 'Planning Engineer', description: 'Critical path scheduling, baseline monitoring & progress reports' },
  { id: 'hr-administration', title: 'HR / Administration', description: 'Human resources, vendor contracts & administrative operations' },
];

export const ROLE_TITLES = roles;
