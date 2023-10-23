import { css, styled } from 'styled-components';
import TextSpan from '@/_components/DealCard/TextSpan';
import ContentGrid from '@/_components/ContentGrid';
import { name } from 'next/dist/telemetry/ci-info';
import numberToCurrency from '@/_utils/NumberToCurrency';

const Article = styled.article<{ $image?: string }>`
  width: 630px;
  height: 400px;
  border-radius: 5px;

  ${({ $image }) => $image && css`
    position: relative;
    z-index: 1;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      display: inline-block;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      content: '';
      background-image: url("${$image}");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }`
  }

`;

type DealCardProps = {
  name: string
  price: number
  yieldPercent: number
  soldPercent: number
  daysLeft: number
  totalPrice: number
  image: string
}

export default function DealCard({
  name,
  price,
  yieldPercent,
  soldPercent,
  daysLeft,
  totalPrice,
  image,
}: DealCardProps) {
  return (
    <Article $image={image}>
      <ContentGrid
        template='repeat(3,1fr)/repeat(3,1fr)'
        alignItems='center'
        padding='14px'
        gap='5px'
        width='100%'
        bottom='0'
        position='absolute'
      >
        <TextSpan isTitle={true}
                  text={name} />
        <TextSpan text={`${numberToCurrency(totalPrice)}`} />
        <TextSpan text={`Yield ${yieldPercent}%`} />
        <TextSpan text={`Sold ${soldPercent}%`} />
        <TextSpan text={`Tiket - ${numberToCurrency(price)}`} />
        <TextSpan text={`Days left ${daysLeft}`} />
      </ContentGrid>
    </Article>
  );
}