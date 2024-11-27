import './App.css';
import useAuth from 'mfe_remote/useAuth';
import LoginForm from 'mfe_remote/LoginForm';
import UserProfileCard from 'mfe_remote/UserProfileCard';
const App = () => {
  const { login, logout, user } = useAuth();
  return (
    <div>
      {user ? (
        <>
          <UserProfileCard user={user} />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
};

export default App;
