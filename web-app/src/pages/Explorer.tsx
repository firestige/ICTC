import {
  Button,
  Card,
  IconButton,
  Input,
  Typography,
} from '@material-tailwind/react';
import { PeriodicTable } from '@/components/periodic';
import { useState } from 'react';
import clsx from 'clsx';

const Explorer: React.FC = () => {
  const [isHidden, setHidden] = useState(true);
  const tableClass = clsx(
    isHidden ? 'opacity-0' : 'opacity-100',
    isHidden ? 'max-h-0' : 'max-h-[410px]',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-center'
  );
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-y-3 relative">
      <Card className="w-[865px] flex flex-row items-center justify-center">
        <Typography variant="h5" className="px-1 flex-1">
          Material
        </Typography>
        <Input
          variant="outlined"
          className="flex-auto rounded-none !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
          labelProps={{
            className: 'hidden',
          }}
          crossOrigin={undefined}
        />
        <IconButton
          className="rounded-none w-24 z-10"
          variant="filled"
          size="md"
          onClick={() => setHidden(!isHidden)}
        >
          <span className="iconify mdi--periodic-table text-3xl text-blue-500r" />
        </IconButton>
        <Button className="rounded-l-none w-32" variant="filled">
          Search
        </Button>
      </Card>
      <Card className={tableClass}>
        <div className="w-[865px] m-2">
          <PeriodicTable />
        </div>
      </Card>
      <Card className="w-[865px]">result section</Card>
    </div>
  );
};
export default Explorer;
