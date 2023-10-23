'use client';
import { styled } from 'styled-components';
import Logo from '@/_components/Header/Logo';
import Button from '@/_components/Button';
import { useRouter } from 'next/navigation';

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #172234;
  color: white;
  padding-right: 80px;
  padding-left: 80px;
  box-shadow: 0 10px 40px 0 #0000000F, 0 2px 10px 0 #0000001A;
`;

type HeaderProps = {}

export default function Header() {
  const router = useRouter();
  const isLoggedIn = false;
  return (
    <header>
      <Nav>
        <Logo />
        {isLoggedIn
          ? <div>links</div>
          : <div>
            <Button
              text='Log In'
              color='#B29F7E'
              onClick={() => {router.push('/signin');}}
            />
            <Button
              text='Sign Up'
              variant='filled'
              color='#B29F7E'
              onClick={() => {router.push('/signin?register');}}
            />
          </div>}
      </Nav>
    </header>
  );
}