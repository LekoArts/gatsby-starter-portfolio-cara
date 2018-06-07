/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Img from 'gatsby-image';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline')};
  img {
    transition: all 0.6s ease-in-out !important;
    filter: grayscale(0);
  }
  &:hover {
    img {
      transform: scale(1.15);
      filter: grayscale(0);
    }
  }
  @media (min-width: 900px) {
    img {
      filter: grayscale(1);
    }
  }
`;

const Image = styled.div`
  ${tw('overflow-hidden')};
  @media (max-width: 1200px) {
    height: 32vw;
  }
`;

const Title = styled.div`
  ${tw(
    'text-white uppercase text-md md:text-lg xl:text-xl tracking-wide px-4 py-2 lg:px-6 lg:py-4 font-sans absolute whitespace-no-wrap shadow-md'
  )};
  bottom: -20px;
  right: -20px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  background: linear-gradient(60deg, #c1611f 0%, #ffa31b 100%);
  @media (max-width: 900px) {
    bottom: -10px;
    right: -10px;
  }
`;

const ProjectCard = ({ fluid, title, link, alt }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer">
    <Image>
      <Img fluid={fluid} alt={alt} />
    </Image>
    <Title>{title}</Title>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
