import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constans';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}
export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}
