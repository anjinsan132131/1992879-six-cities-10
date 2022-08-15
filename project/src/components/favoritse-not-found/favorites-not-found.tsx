import React from 'react';

function FavoritesNotFound(): JSX.Element {
  return (
    <React.Fragment>
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </React.Fragment>
  );
}

export default FavoritesNotFound;
