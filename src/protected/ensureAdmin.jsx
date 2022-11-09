import { useAuthContext } from '../hooks/useAuthContext';
import { Redirect } from 'wouter/preact';
import AdminLanding from '../pages/adminLanding';

const EnsureAdmin = () => {
  const user = useAuthContext();
  return (
    <>
      {user === localStorage.getItem('user')
        ? <AdminLanding />
        : <Redirect to="/"/>
      }
    </>
  )
}

export default EnsureAdmin;