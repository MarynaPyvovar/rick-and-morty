import { useGoogleLogin } from '@react-oauth/google';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { loginGoogle, logoutGoogle, setUser } from 'redux/auth/authOperations';
import { selectAuth } from 'redux/auth/authSelectors';

import st from 'components/GoogleAuth/GoogleAuth.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineLogout } from 'react-icons/md';
import defaultImage from 'assets/defaultImage.jpg';

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
    }, [ user, dispatch ]);

  return (
    <div className={st.wrapper}>
        {profile ? (
            <div className={st.info}>
                <img src={profile.picture ?? defaultImage} alt='avatar'className={st.avatar} />
                <p className={st.name}>Welcome, {profile.name}</p>
                <button onClick={logOut} className={st.button}>
                    <MdOutlineLogout className={st.icon} />
                    Log out
                </button>
            </div>
            ) : (
            <button onClick={() => login()} className={st.button}>
                <FcGoogle className={st.icon} />Sign in with Google
            </button>
        )}
    </div>
  )
}

export default GoogleAuth
