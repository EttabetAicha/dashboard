import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'desactive']),
  role: sample([
    'admin',
    'admin',
    'resource humaines',
    'resource humaines',
    'utilisateur',
    'utilisateur',
    'utilisateur',
    'utilisateur',
    'utilisateur',
    'utilisateur',
  ]),
}));

export default users;
