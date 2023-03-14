import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { loginGoogle, logoutGoogle, setUser } from 'redux/auth/authOperations';
import { selectAuth } from 'redux/auth/authSelectors';

const GoogleAuth: React.FC = () => {
    const { user, profile } = useAppSelector(selectAuth);
    const dispatch = useAppDispatch();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => dispatch(setUser(codeResponse)),
        onError: (error) => console.log('Login Failed:', error)
    });

    const logOut = () => {
        dispatch(logoutGoogle())
    };

    useEffect(() => {
            if (user) {
                dispatch(loginGoogle(user))
            }
        }, [ user, dispatch ]
    );

  return (
    <div>
      {profile ? (
              <div>
                  <img src={profile.picture} alt='avatar' />
                    <p>Welcome, {profile.name}</p>
                    <p>{profile.email}</p>
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀</button>
            )}
    </div>
  )
}

export default GoogleAuth
