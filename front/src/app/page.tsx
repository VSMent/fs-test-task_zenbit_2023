'use client';
import Section from '@/_components/Section';
import Button from '@/_components/Button';
import Heading from '@/_components/Heading';
import Paragraph from '@/_components/Paragraph';
import SubHeading from '@/_components/SubHeading';
import ContentGrid from '@/_components/ContentGrid';
import DealCard from '@/_components/DealCard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/_utils/redux/hooks';
import axios from 'axios';
import { addDeal } from '@/_utils/redux/slices/dealSlice';
import { Deal, DealDTO } from '@/_utils/Types';
import { DateDiffInDays } from '@/_utils/DateDiffInDays';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001';
export default function Home() {
  const dispatch = useAppDispatch();
  const deals = useAppSelector(({ deal }) => deal.deals);

  useEffect(() => {
    const controller = new AbortController();

    deals.length == 0 && axios.get(`${serverUrl}/deals`, {
      signal: controller.signal,
    }).then(resp => {
      if (resp.status == 200) {
        resp.data.forEach((dto: DealDTO) => {
          let deal: Deal = {
            name: dto.name,
            image: dto.image,
            price: dto.price,
            yieldPercent: dto.yield,
            soldPercent: Math.round(dto.soldCount / (dto.count / 100)),
            totalPrice: dto.count * dto.price,
            daysLeft: DateDiffInDays(new Date(), new Date(dto.endDate)),
          };
          dispatch(addDeal(deal));
        });
        console.log(resp.data);
      } else {
        console.log(resp.status, resp.statusText);
      }
    }).catch(err => {
      console.log(err);
    });

    return () => controller.abort();
  }, []);

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
          {deals.map((deal) =>
            <DealCard
              key={deal.name}
              image={deal.image}
              name={deal.name}
              price={deal.price}
              yieldPercent={deal.yieldPercent}
              soldPercent={deal.soldPercent}
              daysLeft={deal.daysLeft}
              totalPrice={deal.totalPrice}
            />)}
        </ContentGrid>
      </Section>
    </main>
  );
}
