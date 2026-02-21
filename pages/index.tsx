import { Carousel } from 'react-responsive-carousel'
import { Button, Testimony, TickListItem } from '@components'
import Head from 'next/head'
import Image from 'next/image'

import { AboutImageContainer, AboutTickList, AboutUsDetail, AboutUsWrapper, IntroDetail, IntroImageContainer, IntroWrapper, Motto, MottoWrapper, ServicesContainer, TestimoniesWrapper, Wrapper } from './index.styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Reidy's Renos & Repairs</title>
      </Head>
      <Wrapper>
        <MottoWrapper>
          <Motto>
            <h1>Reliability is our Guarantee</h1>
            <p>Serving Darwin and Palmerston with home renovations and repairs since 2007</p>
          </Motto>
        </MottoWrapper>

        <IntroWrapper>
          <IntroDetail>
            <p>Tired of tradespeople who don’t reply to enquiries? We will—and we’ll do it today! Leave your home improvement and repairs “to-do list” to Reidy’s Renos & Repairs. With a wealth of experience, Andrew Reid is more than just a home handyman, bridging the gap when you need repairs and maintenance done around the house but don’t want the expense of hiring a building company.</p>
            <p>Our services include:</p>
            <ServicesContainer>
              <TickListItem text="Painting" />
              <TickListItem text="Tiling" />
              <TickListItem text="Welding" />
              <TickListItem text="Plastering" />
              <TickListItem text="Furniture Repairs" />
              <TickListItem text="Home Improvements" />
            </ServicesContainer>
            <p>From a simple fly wire replacement to custom solutions for tricky repairs, we bring quality craftsmanship and a creative approach to every job.</p>
            <Button href="/contact">Get a free quote!</Button>
          </IntroDetail>
          <IntroImageContainer>
            <Image src="/van.jpeg" width={711} height={391} alt="White van with Reidy's Renos and Repairs branding" />
          </IntroImageContainer>
        </IntroWrapper>
        <TestimoniesWrapper>
          <Carousel showThumbs={false} infiniteLoop autoPlay showArrows={false} showIndicators={false} showStatus={false} interval={3000}>
            <Testimony text="Excellent service! Found them to be reliable, prompt and clean. Would highly recommend their services." />
            <Testimony text="Had a range-hood and flue installed with some timber panels to match the kitchen. Job done promptly. Looks great. Thanks." />
            <Testimony text="You did an AMAZING job at Darwin's Peterpans Adventure Travel store! Professional, friendly and reliable service. Thanks!!." />
            <Testimony text="As always, a great job done by Andrew!" />
          </Carousel>
        </TestimoniesWrapper>
        <AboutUsWrapper>
          <h1>About Us</h1>
          <AboutUsDetail>
            <div>
              <p>A family owned and operated local business, Andrew and Vicci Reid noticed the lack of home improvement specialists that offered more skills than your typical handyman, without the expense of enlisting a building company. From this, Reidy’s Renos and Repairs was born.</p>
              <p>From everyday tasks like hanging doors to those tricky home fixes that need a clever touch, we’ve got the skills to help — without the overhead or high prices of larger companies.</p>
              <p>We specialise in home improvements, repairs, and renovations, but we can also oversee  building projects and coordinate any other tradesmen who are required such as plumbers or electricians.</p>
              <p>Find out why Darwin and Palmerston locals prefer our personal and reliable service.</p>
              <AboutTickList>
                <TickListItem text="Trade Qualified" />
                <TickListItem text="Waterproofing Certified" />
                <TickListItem text="Fully Insured" />
              </AboutTickList>
            </div>
            <AboutImageContainer>
              <Image src="/newspaper.webp" width={727} height={418} alt="Andrew Reid standing with arms crossed infront of Reidy's Renos and Repairs branded white van" />
            </AboutImageContainer>
          </AboutUsDetail>
        </AboutUsWrapper>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600, // revalidate every hour
  }
}
