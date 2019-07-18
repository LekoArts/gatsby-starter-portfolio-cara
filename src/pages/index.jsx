import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hi there! <br /> I'm Alex Liu.
        </BigTitle>
        <Subtitle>I design and code full stack applications, and am always looking to push my boundaries!</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="SmashQL"
            link="https://github.com/aliu1212/SmashQL"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            An application that displays Super Smash Bros characters with a back end that uses GraphQL.
          </ProjectCard>
          <ProjectCard
            title="Lulumelon"
            link="https://github.com/house-martell/Similar-Listings-Module"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A full stack application that mimics a product display page.
          </ProjectCard>
          <ProjectCard
            title="TableIt - System Design"
            link="https://github.com/house-martell-sdc/jay-search-navbar-scheduler"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A project that scales a back end for high RPS using NGINX and more!
          </ProjectCard>
          <ProjectCard
            title="Type With Friends"
            link="https://github.com/typewithfriends"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A type racing game to play with friends.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Alex Liu" />
          <AboutSub>
            I am a software engineer and have a passion for systematic problem solving 
            and building beautiful interfaces with as low friction as possible :)
          </AboutSub>
        </AboutHero>
        <AboutDesc>

        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Send me an <a href="mailto:alexliu12@gmail.com">e-mail</a> or find me on{' '}
            <a href="https://github.com/aliu1212">Github</a> and{' '}
            <a href="https://linkedin.com/in/alexliu12">Linkedin</a> 
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">GitHub Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
