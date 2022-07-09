function LocationItem(): JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
        </a>
      </div>
    </div>
  );
}

export default LocationItem;
