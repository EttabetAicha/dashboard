// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Utilisateurs',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Models',
    path: '/dashboard/models',
    icon: icon('ic_cart'),
  },
  
];

export default navConfig;
