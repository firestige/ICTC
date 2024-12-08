import React from 'react';
import { Button, Navbar, Typography } from '@material-tailwind/react';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="w-full">
        <Navbar className="bg-cyan-700">
          <Typography variant="h2">Iris's Chemical Treasure Chest</Typography>
        </Navbar>
      </div>
      <div>
        <div className="w-full">
          <Typography variant="h3">Iris's Chemical Treasure Chest</Typography>
          <p>
            ICTC(Iris's Chemical Treasure Chest) is a tool......
          </p>
        </div>
        <div className="flex flex-row w-full gap-2">
          <Button color="amber" className="text-white flex-1">explore</Button>
          <Button variant="outlined" color="blue" className="flex-1 hover:bg-blue-500 hover:text-white">About</Button>
          <Button variant="outlined" color="lime" className="flex-1 hover:bg-lime-500 hover:text-white">browser</Button>
        </div>
      </div>
      <div>
        <Typography variant="h3">show case</Typography>
      </div>
    </div>
  );
};

export default Welcome;