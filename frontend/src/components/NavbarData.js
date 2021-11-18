import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const NavbarData = [
  {
    title: 'PI COMMERCE',
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'CONTENIDO',
    path: '/usuarios',
    cName: 'nav-text'
  },
  {
    title: 'NOSOTROS',
    path: '/products',
    cName: 'nav-text'
  },
  {
    title: 'CONTACTENOS',
    path: '/categorias',
    cName: 'nav-text'
  },
  { 
    icon: <FaIcons.FaCartPlus />,
    path: '/products',
    cName: 'nav-text'
}
];