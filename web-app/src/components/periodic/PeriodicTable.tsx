import React from 'react';
import { catalogs, PeriodicElement, periodicElements } from './data';
import { Typography } from '@material-tailwind/react';
import GridLayout from 'react-grid-layout';

const Cell: React.FC<PeriodicElement> = (props) => {
  const { id, symbol, name, catalog } = props;
  return (
    <div
      className="w-full h-full flex hover:transition-transform duration-300 hover:scale-150 outline hover:outline-cyan-50 hover:outline-1"
      style={{
        background: catalogs.find((value) => value.id == catalog)!.color,
      }}
    >
      <div className="absolute top-0 left-0 px-0.5 text-white text-[0.4rem]">
        {id}
      </div>
      <Typography variant="h6" className="m-auto text-white">
        {symbol}
      </Typography>
      <div className="absolute bottom-0 py-0.5 w-full text-white text-[0.4rem] text-center">
        {name}
      </div>
    </div>
  );
};

const PeriodicTable: React.FC = () => {
  return (
    <GridLayout
      className="layout"
      cols={18}
      rowHeight={40}
      width={860}
      margin={[5, 5]}
    >
      {periodicElements.map((element) => (
        <div
          className="rounded z-10 hover:z-40"
          key={element.symbol}
          data-grid={{
            x: element.column,
            y: element.row,
            w: 1,
            h: 1,
            static: true,
          }}
        >
          <Cell {...element} />
        </div>
      ))}
    </GridLayout>
  );
};

export default PeriodicTable;
