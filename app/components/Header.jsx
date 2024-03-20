import {NavLink} from '@remix-run/react';
import Logo from '~/assets/imags/logo.7b0dbd79.svg';
import {genIconHeader} from '~/helper/getIconHeader';
import Button from './Button';
export function Header({header, isLoggedIn, cart}) {
  const {shop, menu} = header;
  return (
    <header className="header-wrapper">
      <div className="header-item header-left">
        <NavLink prefetch="intent" to="/">
          <img className="logo" loading="lazy" src={Logo} alt={shop.name} />
        </NavLink>
        <HeaderMenu menu={menu} />
      </div>
      <div className="header-item header-middle"></div>
      <div className="header-item header-right">
        <div className="header-action">
          <Button label="Login" color="secondary" />
          <Button label="Register" />
        </div>
      </div>
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
