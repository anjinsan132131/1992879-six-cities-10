import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constans';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}
export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}
