//import React from 'react';

import { Dog } from "./../Dog/Dog";
import "./Dogs.scss";

function Dogs(props) {
  const { dogs } = props;

  return (
    <div className="dogs">
      {dogs.length ? (
        dogs.map((dog) => {
          return <Dog key={dog.id} {...dog} />;
        })
      ) : (
        <h4 className="not-found">Nothing found</h4>
      )}
    </div>
  );
}

export { Dogs };
