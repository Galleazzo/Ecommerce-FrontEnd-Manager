import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    title: true,
    name: 'Main'
  },
  {
    name: 'Produtos',
    url: '/main/products',
    iconComponent: { name: 'cil-drop' }
  }
];
