import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil';
import { requestAPI } from '../api/requests';
import { useNavigate } from 'react-router-dom';
import { strict } from 'assert';

type Props = {};

const Header = (props: Props) => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  // const [acToken, setAcToken] = useState('');
  // console.log(user);

  const logoutHandler = async () => {
    // if (!accessToken) return;
    const type = 'post';
    const endpoint = '/auth/logout';
    const page = '';
    const data = {
      email: '',
      password: '',
    };
    const userState = JSON.parse(localStorage.getItem('userState') || '');
    const accessToken = userState.accessToken;
    // console.log(accessToken);
    try {
      // console.log(accessToken);
      const res = await requestAPI({ type, endpoint, data, page, accessToken });
      console.log(res);
      if (res) {
        setUser(null);
        navigate('/');
      }
    } catch (error) {
      if (error instanceof Error) alert('로그아웃 실패 : ' + error.message);
      else alert('로그아웃 실패');
      console.log('로그아웃 실패ㅁㄴㄷㄹㅊㄷㅁㄴㅊㄹ');
    }
  };

  return (
    <div>
      Header
      <Link to='/'>홈</Link>
      <br />
      {user ? (
        <Link to='/' onClick={logoutHandler}>
          로그아웃
        </Link>
      ) : (
        <Link to='/signin'>로그인</Link>
      )}
      <br />
      <Link to='/signup'>회원가입</Link>
    </div>
  );
};

export default Header;
