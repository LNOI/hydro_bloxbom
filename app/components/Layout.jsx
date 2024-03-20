import React from 'react';
import {Header} from '~/components/Header';
const mock = {
  header: {
    shop: {
      name: 'BloxBoom',
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
      {/* <ThemeProvider theme={theme}> */}

      <Header header={mock.header} />
      <main>{children}</main>
      {/* </ThemeProvider> */}
    </div>
  );
}
