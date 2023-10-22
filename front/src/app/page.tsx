'use client';
import Section from '@/_components/Section';
import Button from '@/_components/Button';
import Heading from '@/_components/Heading';
import Paragraph from '@/_components/Paragraph';

export default function Home() {
  return (

    <main>
      <Section image='/Main.png' height='calc(100vh - 80px)'>
        <Heading margin='10px' text='The chemical  negatively charged' />
        <Paragraph
          width='822px'
          text='Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is' />
        <Button margin='30px' text='Get Started' />
      </Section>
    </main>
  );
}
