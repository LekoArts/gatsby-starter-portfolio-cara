/* eslint no-unused-expressions: 0 */
/* global tw */
import React from 'react';
import { injectGlobal, css } from 'emotion';
import styled, { keyframes } from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import SVG from '../components/SVG';
import { colors, width } from '../../tailwind';
import triangle from '../utils/triangle.svg';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Page = styled.div`
  ${tw('text-black text-xl w-full h-full')};
`;

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-24 justify-center items-center flex z-50')};
`;

const Inner = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const BigTitle = styled.h1`
  ${tw('text-6xl font-serif text-white mb-6 tracking-wide')};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Title = styled.h1`
  ${tw('text-5xl font-serif text-white mb-6 tracking-wide relative')};
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 12px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-4xl font-sans text-white mt-8 xxl:w-4/5')};
`;

const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  position: relative;
  height: 100%;
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const waveOne = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDownAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const upDownWideAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

const UpDown = styled.div`
  animation: ${upDownAnimation} 4s ease-in-out infinite alternate;
  ${tw('pin absolute')};
`;

const UpDownWide = styled.div`
  animation: ${upDownWideAnimation} 18s ease-in-out infinite alternate;
  ${tw('pin absolute')};
`;

const waveOneAnimation = css`
  animation: ${waveOne} 25s linear infinite alternate;
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Page>
      <Parallax pages={5}>
        <Divider speed={0.2} offset={0}>
          <UpDown>
            <SVG icon="triangle" width={width['48']} stroke={colors.orange} left="10%" top="20%" />
            <SVG icon="hexa" width={width['48']} stroke={colors.red} left="60%" top="70%" />
            <SVG icon="box" width={width['6']} fill={colors['grey-darker']} left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="arrowUp" width={width['16']} fill={colors['blue-dark']} left="80%" top="10%" />
            <SVG icon="triangle" width={width['12']} stroke={colors.white} left="90%" top="50%" />
            <SVG icon="circle" width={width['16']} fill={colors['grey-darker']} left="70%" top="90%" />
            <SVG icon="triangle" width={width['16']} stroke={colors['grey-darkest']} left="30%" top="65%" />
            <SVG icon="circle" width={width['6']} fill={colors['grey-darkest']} left="75%" top="10%" />
            <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="circle" width={width['24']} fill={colors['grey-darker']} left="5%" top="70%" />
          <SVG icon="circle" width={width['6']} fill={colors['grey-darkest']} left="4%" top="20%" />
          <SVG icon="circle" width={width['12']} fill={colors['grey-darkest']} left="50%" top="60%" />
          <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="95%" top="90%" />
          <SVG icon="upDown" width={width['24']} fill={colors['grey-darker']} left="40%" top="80%" />
          <SVG icon="triangle" width={width['8']} stroke={colors['grey-darker']} left="25%" top="5%" />
          <SVG icon="circle" width={width['64']} fill={colors.green} left="95%" top="5%" />
          <SVG icon="box" width={width['64']} fill={colors.purple} left="5%" top="90%" />
          <SVG icon="box" width={width['6']} fill={colors['grey-darkest']} left="10%" top="10%" />
          <SVG icon="box" width={width['12']} fill={colors['grey-darkest']} left="40%" top="30%" />
          <SVG icon="hexa" width={width['16']} stroke={colors['grey-darker']} left="10%" top="50%" />
          <SVG icon="hexa" width={width['8']} stroke={colors['grey-darker']} left="80%" top="70%" />
        </Divider>
        <Content speed={0.4} offset={0}>
          <Inner>
            <BigTitle>
              Hello, <br /> I'm John Doe.
            </BigTitle>
            <Subtitle>
              I'm creating noice web experiences for the next generation of consumer-facing companies.
            </Subtitle>
          </Inner>
        </Content>
        <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={1} factor={2} />
        <DividerMiddle
          bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
          speed={-0.2}
          offset={1}
          factor={2}
        />
        <Content speed={0.4} offset={1} factor={2}>
          <Inner>
            <Title>Projects</Title>
          </Inner>
        </Content>
        <Divider speed={0.1} offset={1} factor={2}>
          <UpDown>
            <SVG icon="box" width={width['6']} fill={colors['grey-darker']} left="50%" top="75%" />
            <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="70%" top="20%" />
            <SVG icon="triangle" width={width['8']} stroke={colors['grey-darkest']} left="25%" top="5%" />
            <SVG icon="circle" width={width['24']} fill={colors['grey-darkest']} left="10%" top="60%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="arrowUp" width={width['16']} fill={colors['blue-dark']} left="20%" top="90%" />
            <SVG icon="triangle" width={width['12']} stroke={colors.white} left="90%" top="30%" />
            <SVG icon="circle" width={width['16']} fill={colors['grey-darkest']} left="70%" top="90%" />
            <SVG icon="triangle" width={width['16']} stroke={colors['grey-darkest']} left="30%" top="65%" />
            <SVG icon="circle" width={width['6']} fill={colors.white} left="75%" top="10%" />
            <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="circle" width={width['6']} fill={colors.white} left="4%" top="20%" />
          <SVG icon="circle" width={width['12']} fill={colors['grey-darkest']} left="70%" top="60%" />
          <SVG icon="box" width={width['6']} fill={colors.orange} left="10%" top="10%" />
          <SVG icon="box" width={width['12']} fill={colors['grey-darkest']} left="20%" top="30%" />
          <SVG icon="hexa" width={width['16']} stroke={colors['grey-darkest']} left="5%" top="50%" />
          <SVG icon="hexa" width={width['8']} stroke={colors['grey-darkest']} left="80%" top="70%" />
        </Divider>
        <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
        <Divider speed={0.1} offset={3}>
          <UpDown>
            <SVG icon="box" width={width['6']} fill={colors.blue} left="50%" top="75%" />
            <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="70%" top="20%" />
            <SVG icon="triangle" width={width['8']} stroke={colors['grey-darkest']} left="25%" top="5%" />
            <SVG icon="upDown" width={width['24']} fill={colors.orange} left="80%" top="80%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="arrowUp" width={width['16']} fill={colors.purple} left="5%" top="80%" />
            <SVG icon="triangle" width={width['12']} stroke={colors.white} left="95%" top="50%" />
            <SVG icon="circle" width={width['6']} fill={colors.white} left="85%" top="15%" />
            <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="circle" width={width['6']} fill={colors.white} left="4%" top="20%" />
          <SVG icon="circle" width={width['12']} fill={colors['grey-darkest']} left="70%" top="60%" />
          <SVG icon="box" width={width['6']} fill={colors.orange} left="10%" top="10%" />
          <SVG icon="box" width={width['12']} fill={colors['grey-darkest']} left="20%" top="30%" />
          <SVG icon="hexa" width={width['8']} stroke={colors['grey-darkest']} left="80%" top="70%" />
        </Divider>
        <Content speed={0.4} offset={3}>
          <h1>Slide 3 - This is a long heading Slide 3 - This is a long heading</h1>
        </Content>
        <Divider fill="#23262b" speed={0.2} offset={4}>
          <WaveWrapper>
            <InnerWave>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
                <path className={waveOneAnimation}>
                  <animate
                    attributeName="d"
                    values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                    repeatCount="indefinite"
                    dur="30s"
                  />
                </path>
              </svg>
            </InnerWave>
          </WaveWrapper>
        </Divider>
        <Content speed={0.4} offset={4}>
          <h1>Slide 4 - This is a long heading Slide 4 - This is a long heading</h1>
        </Content>
        <Divider speed={0.1} offset={4}>
          <UpDown>
            <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="70%" top="20%" />
            <SVG icon="triangle" width={width['8']} stroke={colors['grey-darkest']} left="25%" top="5%" />
          </UpDown>
          <UpDownWide>
            <SVG icon="triangle" width={width['12']} stroke={colors.white} left="95%" top="50%" />
            <SVG icon="circle" width={width['6']} fill={colors.white} left="85%" top="15%" />
            <SVG icon="upDown" width={width['8']} fill={colors['grey-darkest']} left="45%" top="10%" />
          </UpDownWide>
          <SVG icon="circle" width={width['6']} fill={colors.white} left="4%" top="20%" />
          <SVG icon="circle" width={width['12']} fill={colors['grey-darkest']} left="70%" top="60%" />
          <SVG icon="box" width={width['12']} fill={colors['grey-darkest']} left="20%" top="30%" />
          <SVG icon="hexa" width={width['8']} stroke={colors['grey-darkest']} left="80%" top="70%" />
        </Divider>
      </Parallax>
    </Page>
  </React.Fragment>
);

export default Index;
