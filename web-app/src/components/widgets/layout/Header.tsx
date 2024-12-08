import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Typography } from '@material-tailwind/react';
import { camelCase } from '@/utils';

interface HeaderProps {
  brandName: string;
  routes: { name: string; path: string; icon: string }[];
}

const Breadcrumb: React.FC = () => {
  const { pathname } = useLocation();
  const path = useMemo(() => {
    const list = pathname.split('/');
    console.log(list);
    let path = '';
    return list
      .filter((s) => s.trim().length > 0)
      .map((item, index) => {
        path += item;
        return (
          <React.Fragment key={index}>
            <Typography variant="h6" className="text-gray-400 px-4">
              /
            </Typography>
            {index === pathname.length - 1 ? (
              <Link to={path} className="text-gray-400">
                {camelCase(item)}
              </Link>
            ) : (
              <Typography variant="h6" className="text-black">
                {camelCase(item)}
              </Typography>
            )}
          </React.Fragment>
        );
      });
  }, [pathname]);
  return (
    <div className="flex flex-row">
      <Link to="/" className="text-gray-400">
        Home
      </Link>
      {path}
    </div>
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  const location = useLocation();
  const title = useMemo(
    () => location.pathname.split('/').at(-1),
    [location.pathname]
  );
  return (
    <Navbar>
      <div className="flex flex-col flex-1/2 items-start">
        <div>
          <Breadcrumb />
        </div>
        <div>
          <Typography variant="h5" className="text-black">
            {camelCase(title)}
          </Typography>
        </div>
      </div>
      <div></div>
      <div></div>
    </Navbar>
  );
};

export default Header;
