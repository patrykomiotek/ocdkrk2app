import { NavLink } from 'react-router-dom';

import { Route } from '../../routes';

export const Menu = () => {
  return (
    <div className="pb-4 border-b-2 border-stone-900  dark:border-slate-500">
      <nav>
        <ul className="flex mt-2">
          <li className="mr-4">
            <NavLink
              to={Route.HOME.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Home
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.PRODUCTS_LIST.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
