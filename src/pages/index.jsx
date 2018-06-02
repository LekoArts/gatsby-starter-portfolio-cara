/* eslint no-unused-expressions: 0 */
/* global tw */
import React from 'react';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';

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
`;

const DividerBottom = styled(Divider)`
  clip-path: polygon(0 100%, 100% 90%, 100% 38%, 0 50%);
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 60%, 100% 90%, 100% 30%, 0 0);
`;

const Content = styled(ParallaxLayer)`
  ${tw('justify-center items-center flex p-8')};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw('font-serif text-white')};
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Page>
      <Parallax pages={3}>
        <DividerBottom bg="#23262b" speed={0.2} offset={0} />
        <DividerMiddle bg="linear-gradient(to right, deeppink 0%, coral 100%)" speed={-0.2} offset={0} />
        <Content speed={0.4} offset={0}>
          <h1>Slide 1 - This is a long heading Slide 1 - This is a long heading</h1>
        </Content>
        <DividerBottom bg="#23262b" speed={0.2} offset={1} />
        <DividerMiddle bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" speed={-0.2} offset={1} />
        <Content speed={0.4} offset={1}>
          <h1>Slide 2 - This is a long heading Slide 2 - This is a long heading</h1>
        </Content>
        <DividerBottom bg="#23262b" speed={0.2} offset={2} />
        <DividerMiddle bg="linear-gradient(to right, tomato 0%, gold 100%)" speed={-0.2} offset={2} />
        <Content speed={0.4} offset={2}>
          <h1>Slide 3 - This is a long heading Slide 3 - This is a long heading</h1>
        </Content>
      </Parallax>
    </Page>
  </React.Fragment>
);

export default Index;
