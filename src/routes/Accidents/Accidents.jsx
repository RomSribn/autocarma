import React from 'react';


import './Accidents.scss';

const Accidents = () => (
  <>
    <h2 id="caption">Star Wars Trilogy Data</h2>

    <div role="table" aria-labelledby="caption">
      <div role="rowgroup">
        <div role="row">
          <div role="columnheader">Title</div>
          <div role="columnheader">Director</div>
          <div role="columnheader">Release Date</div>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row">
          <div role="rowheader">Star Wars: Episode IV - A New Hope</div>
          <div role="cell">George Lucas</div>
          <div role="cell">May 25th, 1977</div>
        </div>
        <div role="row">
          <div role="rowheader">Star Wars: Episode V - The Empire Strikes Back</div>
          <div role="cell">Irvin Kershner</div>
          <div role="cell">May 21st, 1980</div>
        </div>
        <div role="row">
          <div role="rowheader">Star Wars: Episode VI - Return of the Jedi</div>
          <div role="cell">Richard Marquand</div>
          <div role="cell">May 25th, 1983</div>
        </div>
      </div>
    </div>

  </>
);

export default Accidents;
