import React from 'react';
import {Header} from '~/components/Header';
const mock = {
  header: {
    shop: {
      name: 'BloxBom',
      urls: 'imgs',
    },
    menu: [
      {
        name: 'Store',
        to: '/store',
      },
      // {
      //   name: 'Order Status',
      //   to: '/order-status',
      // },
      {
        name: 'Support',
        to: '/support',
      },
      {
        name: 'FAQ',
        to: '/faq',
      },
    ],
  },
};
export function Layout({children}) {
  return (
    <div>
      <Header header={mock.header} />
      <main>{children}</main>
    </div>
  );
}
