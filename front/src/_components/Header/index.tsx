'use client';
import { styled } from 'styled-components';
import Logo from '@/_components/Header/Logo';
import Button from '@/_components/Button';
import { useRouter } from 'next/navigation';
import Link from '@/_components/Header/Link';
import { useAppSelector } from '@/_utils/redux/hooks';

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
  const currentUser = useAppSelector(({ user }) => user.currentUser);

  return (
    <header>
      <Nav>
        <Logo />
        {currentUser
          ? <>
            <div>
              <Link text='Links' href='#' />
              <Link text='to' href='#' />
              <Link text='user' href='#' />
              <Link text='available' href='#' />
              <Link text='pages' href='#' />
            </div>
            <div>
              <Button
                text='Sign Out'
                color='#B29F7E'
                onClick={() => {console.log('sign out');}}
              />
            </div>
          </>
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