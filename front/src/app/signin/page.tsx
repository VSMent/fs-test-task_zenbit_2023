'use client';
import { useSearchParams } from 'next/navigation';
import Section from '@/_components/Section';
import { styled } from 'styled-components';
import SubHeading from '@/_components/SubHeading';
import Input from '@/_components/Input';

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
export default function SignIn() {
  const search = useSearchParams();
  const isRegister = search.has('register');

  return (
    <Container>
      <Section image='/Register.png' width='62%' height='100%' />
      <Section bgColor={'white'} flexGrow='1' height='100%'>
        <form>
          <Container2>
            <SubHeading text={isRegister ? 'Register' : 'Login'} margin='0 0 20px' />
            <Input
              type='email'
              name='email'
              placeholder='Email'
              bgColor='#E0E0E0'
              color='black'
              withLabel={{ text: 'Email' }}
              width='515px'
              height='48px'
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
            />
          </Container2>
        </form>
      </Section>
    </Container>
  );
}