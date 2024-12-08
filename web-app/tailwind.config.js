/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';
import { addIconSelectors } from '@iconify/tailwind';

export default withMT({
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        18: 'repeat(18, minmax(0, 1fr))',
      },
    },
  },
  plugins: [
    addIconSelectors([
      'mdi',
      'lets-icons',
      'duo-icons',
      'ph',
      'pepicons-print',
    ]),
  ],
  safelist: [
    'row-start-1',
    'row-start-2',
    'row-start-3',
    'row-start-4',
    'row-start-5',
    'row-start-6',
    'row-start-7',
    'row-start-8',
    'row-start-9',
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
    'col-start-8',
    'col-start-9',
    'col-start-10',
    'col-start-11',
    'col-start-12',
    'col-start-13',
    'col-start-14',
    'col-start-15',
    'col-start-16',
    'col-start-17',
    'col-start-18',
  ],
});
