import React from 'react';

import * as AiIcons from 'react-icons/ai';

const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
  },
  {
    title: 'Skills and Bio',
    path: '/skills&bio',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiOutlineProject />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiFillPhone />,
    cName: 'nav-text',
  },
];

export default SideBarData;
