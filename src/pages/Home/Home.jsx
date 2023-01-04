import { Button, ServiceTick } from '/src/components'

import { IntroDetail, IntroImageContainer, IntroWrapper, Motto, MottoWrapper, ServicesContainer, Wrapper } from './Home.styles'

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
          <ServiceTick service="Painting" />
          <ServiceTick service="Tiling" />
          <ServiceTick service="Welding" />
          <ServiceTick service="Plastering" />
        </div>
        <div>
          <ServiceTick service="Paving" />
          <ServiceTick service="Home Improvements" />
          <ServiceTick service="Bathroom Renovations" />
          <ServiceTick service="Kitchen  Renovations" />
        </div>
      </ServicesContainer>
      <p>Whether its a full bathroom renovation or a simple fly wire replacement, we'll get the job done.</p>
      <Button>Get a free quote!</Button>
    </IntroDetail>
    <IntroImageContainer>
      <img src="/van.png"></img>
    </IntroImageContainer>
  </IntroWrapper>
</Wrapper>


export default Home
