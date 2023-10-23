'use client';
import Section from '@/_components/Section';
import Button from '@/_components/Button';
import Heading from '@/_components/Heading';
import Paragraph from '@/_components/Paragraph';
import SubHeading from '@/_components/SubHeading';
import ContentGrid from '@/_components/ContentGrid';
import DealCard from '@/_components/DealCard';

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
      <Section bgColor='white'>
        <SubHeading text='Open Deals' width='1280px' color='#B29F7E' margin='50px 0 20px' />
        <ContentGrid width='1280px' gap='20px'>
          {[1, 2, 3, 4].map((i) =>
            <DealCard
              key={i}
              image={`/Card${i}.png`}
              name='The Marina Torch'
              price={60000}
              yieldPercent={9.25}
              soldPercent={75}
              daysLeft={150}
              totalPrice={6500000}
            />)}{/* todo load from db*/}
        </ContentGrid>
      </Section>
    </main>
  );
}
