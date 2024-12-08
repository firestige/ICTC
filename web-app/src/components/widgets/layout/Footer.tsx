import React from 'react';
import { Typography } from '@material-tailwind/react';
import { HeartIcon } from '@heroicons/react/24/solid';

interface LinkProps {
  name: string;
  path: string;
}

interface FooterProps {
  brandLink: string;
  brandName: string;
  routes: LinkProps[];
}

// todo 优化Typography中的placeholder、onPointerEnterCapture、onPointerLeaveCapture属性

const Footer: React.FC<FooterProps> = (props) => {
  const { brandLink, brandName, routes } = props;
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography
          variant="small"
          className="font-normal text-inherit"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          &copy; {year}, made with{' '}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5 text-red-600" />{' '}
          by{' '}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {brandName}
          </a>{' '}
          for a better web.
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
