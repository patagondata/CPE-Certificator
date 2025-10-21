import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import ClipboardIcon from '@heroicons/react/24/solid/ClipboardIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import DeviceIcon from '@heroicons/react/24/solid/RectangleStackIcon';
import WindowIcon from '@heroicons/react/24/solid/CodeBracketIcon';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import CpuChipIcon from '@heroicons/react/24/solid/CpuChipIcon';
import WrenchScrwDriverIcon from '@heroicons/react/24/solid/WrenchScrewdriverIcon';
import ShieldCheckIcon from '@heroicons/react/24/solid/ShieldCheckIcon';
import AcsIcon from '@heroicons/react/24/solid/LinkIcon';
import RectangleGroup from '@heroicons/react/24/solid/RectangleGroupIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ClipboardIcon />
      </SvgIcon>
    )
  },
   {
    title: 'CPEs',
    path: '/devices',
    icon: (
      <SvgIcon fontSize="small">
        <DeviceIcon />
      </SvgIcon>
    )
  },
   {
    title: 'Device Types',
    path: '/device-types',
    icon: (
      <SvgIcon fontSize="small">
        <WindowIcon />
      </SvgIcon>
    )
  },  
  {
    title: 'Grupos de Pruebas',
    path: '/tests-groups',
    icon: (
      <SvgIcon fontSize="small">
        <RectangleGroup />
      </SvgIcon>
    )
  },   
  {
    title: 'Configuración de Pruebas',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CpuChipIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Configuración ACS',
    path: '/acs-config',
    icon: (
      <SvgIcon fontSize="small">
        <AcsIcon />
      </SvgIcon>
    )
  },  
  {
    title: 'Gestion de Usuarios',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
   {
    title: 'Mi Cuenta',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  }
];
