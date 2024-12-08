import React from 'react';
import { Typography } from '@material-tailwind/react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row h-12 bg-blue-gray-600">
      <div className="flex-1">
        <Typography variant="h5" className="text-white">Iris's Chemical Treasure Chest</Typography>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div><Header /></div>
      <div className="flex flex-col gap-y-3">
        <div><Typography variant="h3">Iris's Chemical Treasure Chest</Typography></div>
        <div className="w-2/3">
          <p>ICTC(Iris's Chemical Treasure Chest) is a tool set for Theoretical Chemical Calculation developed by
            firestige as a gift to Iris</p>
        </div>
        <div className="flex flex-row w-96 gap-2">
          <button className="flex-1 rounded border-amber-400 border-2 bg-amber-500 text-white">search</button>
          <button
            className="flex-1 rounded border-green-400 border-2 text-green-600 hover:bg-green-500 hover:text-white">browse
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;