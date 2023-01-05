import { Carousel } from 'react-responsive-carousel'

import { Button, Testimony, TickListItem } from '/src/components'

import { AboutImageContainer, AboutTickList, AboutUsDetail, AboutUsWrapper, IntroDetail, IntroImageContainer, IntroWrapper, Motto, MottoWrapper, ServicesContainer, TestimoniesWrapper, Wrapper } from './Home.styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Home = () => <Wrapper>
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
        <div>
          <TickListItem text="Painting" />
          <TickListItem text="Tiling" />
          <TickListItem text="Welding" />
          <TickListItem text="Plastering" />
        </div>
        <div>
          <TickListItem text="Paving" />
          <TickListItem text="Home Improvements" />
          <TickListItem text="Bathroom Renovations" />
          <TickListItem text="Kitchen  Renovations" />
        </div>
      </ServicesContainer>
      <p>Whether its a full bathroom renovation or a simple fly wire replacement, we'll get the job done.</p>
      <Button href="/contact" style={{width: '200px' }}>Get a free quote!</Button>
    </IntroDetail>
    <IntroImageContainer>
      <img src="/van.png"></img>
    </IntroImageContainer>
  </IntroWrapper>
  <TestimoniesWrapper>
    <Carousel infiniteLoop autoPlay showArrows={false} showIndicators={false} showStatus={false} interval={3000}>
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
        <p>From simple chores like hanging doors, to complete kitchen and bathroom renovations,  the Reidy’s has the skills you need and, because of our lower overheads, the lower prices than larger franchises</p>
        <p>We specialise in home improvements, repairs, and renovations, but we can also oversee  building projects and coordinate any other tradesmen who are required such as plumbers or electricians.</p>
        <p>Find out why Darwin and Palmerston locals prefer our personal and reliable service.</p>
        <AboutTickList>
          <TickListItem text="Trade Qualified" />
          <TickListItem text="Waterproofing Certified" />
          <TickListItem text="Fully Insured" />
        </AboutTickList>
      </div>
      <AboutImageContainer>
        <img src="/newspaper.png"></img>
      </AboutImageContainer>
    </AboutUsDetail>
  </AboutUsWrapper>
</Wrapper>


export default Home
