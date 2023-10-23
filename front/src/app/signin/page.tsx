'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Section from '@/_components/Section';
import { styled } from 'styled-components';
import SubHeading from '@/_components/SubHeading';
import Input from '@/_components/Input';
import axios from 'axios';
import { serverUrl } from '@/_utils/Constants';
import Link from '@/_components/Link';
import Button from '@/_components/Button';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/_utils/redux/hooks';
import { logUserIn } from '@/_utils/redux/slices/userSlice';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  overflow: hidden;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: black;
`;
const P = styled.p`
  font-family: Lato, Arial, serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;

  color: #172234
`;

export default function SignIn() {
  const search = useSearchParams();
  const isRegisterPath = search.has('register');

  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(({ user }) => user.currentUser);

  const inputHandler = (target: HTMLInputElement) => {
    setFormData({ ...formData, [target.name]: target.value });
  };
  const loginHandler = () => {
    axios.post(`${serverUrl}/users/login`, formData).then(resp => {
      if (resp.status == 201) {
        dispatch(logUserIn(resp.data));
        router.push('/')
      } else {
        console.log(resp.status, resp.statusText);
      }
    }).catch(err => {
      console.log(err);
    });
  };
  const registerHandler = () => {
    axios.post(`${serverUrl}/users`, formData)
      .then(resp => {
        if (resp.status == 201) {
          dispatch(logUserIn(resp.data));
          router.push('/')
        } else {
          console.log(resp.status, resp.statusText);
        }
      }).catch(err => {
      console.log(err);
    });
  };

  return (
    <Container>
      <Section image='/Register.png' width='62%' height='100%' />
      <Section bgColor={'white'} flexGrow='1' height='100%'>
        <form>
          <Container2>
            <SubHeading text={isRegisterPath ? 'Register' : 'Login'} margin='0 0 20px' />
            <Input
              type='email'
              name='email'
              placeholder='Email'
              bgColor='#E0E0E0'
              color='black'
              withLabel={{ text: 'Email' }}
              width='515px'
              height='48px'
              onChange={(event) => inputHandler(event.target)}
            />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              bgColor='#E0E0E0'
              color='black'
              withLabel={{ text: 'Password' }}
              width='515px'
              height='48px'
              onChange={(event) => inputHandler(event.target)}
            />
            {!isRegisterPath && <Link text='Forgot password?' href={'#'} textAlign='right' />}
            <Button
              text={isRegisterPath ? 'Sign Up' : 'Sign In'}
              variant='filled'
              color='#B29F7E'
              width='100%'
              onClick={() => isRegisterPath ? registerHandler() : loginHandler()}

            />
            {!isRegisterPath && <P>Don’t have account? <Link text='Sign Up' href={'/signin?register'} /></P>}
          </Container2>
        </form>
      </Section>
    </Container>
  );
}