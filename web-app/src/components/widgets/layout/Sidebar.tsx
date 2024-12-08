import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '@/context';
import clsx from 'clsx';
import { Typography } from '@material-tailwind/react';

const Sidebar: React.FC = () => {
  const { state } = useGlobalContext();
  const { isSidebarOpened } = state;

  const barClassName = clsx(
    isSidebarOpened ? 'translate-x-0' : '-translate-x-80',
    'fixed',
    'inset-0',
    'z-50',
    'my-4',
    'ml-4',
    'h-[calc(100vh-32px)]',
    'w-72',
    'rounded-xl',
    'transition-transform',
    'duration-300',
    'xl:translate-x-0',
    'border',
    'border-blue-gray-100`',
    'bg-white',
    'p-2'
  );

  return (
    <aside className={barClassName}>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-700">ICTC</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify duo-icons--app text-2xl" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`
              }
            >
              Overview
            </NavLink>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify pepicons-print--line-x text-2xl text-gray-400" />
            <Typography variant="h6" className="block p-2 rounded">
              Search
            </Typography>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify mdi--search text-2xl" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`
              }
            >
              General Search
            </NavLink>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify lets-icons--molecule text-2xl" />
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`
              }
            >
              Molecule Search
            </NavLink>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify pepicons-print--line-x text-2xl text-gray-400" />
            <Typography variant="h6" className="block p-2 rounded">
              Tool kit
            </Typography>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify mdi--design text-2xl" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`
              }
            >
              Molecule Design
            </NavLink>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify ph--wave-sine-bold text-2xl" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`
              }
            >
              IR Spectrum
            </NavLink>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify pepicons-print--line-x text-2xl text-gray-400" />
            <Typography variant="h6" className="block p-2 rounded">
              Contribute
            </Typography>
          </li>
          <li className="mb-2 flex flex-row items-center">
            <span className="iconify mdi--upload text-2xl" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? 'bg-gray-200 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`
              }
            >
              Upload Data
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
