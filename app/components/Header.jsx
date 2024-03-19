import {NavLink} from '@remix-run/react';

import {genIconHeader} from '~/helper/getIconHeader';
export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  return (
    <header className="header-wrapper">
      <NavLink prefetch="intent" to="/">
        <strong>{shop.name}</strong>
      </NavLink>
      <HeaderMenu menu={menu} />
    </header>
  );
}

export function HeaderMenu({menu = []}) {
  return (
    <div className="header-navigation">
      {menu.map((path, idx) => {
        return (
          <NavLink to={path.to} key={idx}>
            {({isActive}) => (
              <div
                className={`header-navigation-item ${isActive ? 'active' : ''}`}
              >
                {genIconHeader(
                  path.name,
                  `header-navigation-item-icon ${isActive ? 'active' : ''}`,
                )}
                <span>{path.name}</span>
              </div>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}
