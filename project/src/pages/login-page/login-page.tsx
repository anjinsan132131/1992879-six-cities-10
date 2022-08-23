import { Link, Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Login from '../../components/login/login';
import { AppRoute, AuthorizationStatus, SORTING } from '../../constans';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCityAction, setOffersByCityAction, sortValueAction } from '../../store/offers-data/offers-data';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getRandomCity } from '../../utils';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const currentRandomCity = useAppSelector(getRandomCity);
  const onCityClick = () => {
    dispatch(selectCityAction(currentRandomCity));
    dispatch(setOffersByCityAction());
    dispatch(sortValueAction(SORTING.POPULAR));
  };


  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return(
    <div className="page page--gray page--login">
      <Header isNavVisible={false}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Login/>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}
                onClick={onCityClick}
              >
                <span>{currentRandomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
