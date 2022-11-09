import { useAuthContext } from '../hooks/useAuthContext';
import { Redirect } from 'wouter/preact';
import AdminLanding from '../pages/adminLanding';

const EnsureAdmin = () => {
  const user = useAuthContext().user;
  return (
    <>
      {!user
        ? <Redirect to="/"/>
        : <AdminLanding />
      }
    </>
  )
}

export default EnsureAdmin;