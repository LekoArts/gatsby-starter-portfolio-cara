/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.article`
  ${tw('bg-grey-light')};
`;

const ProjectCard = () => (
  <Wrapper>
    <div>Bild</div>
    <div>
      <h2>Titel</h2>
      <p>Beschreibung</p>
    </div>
  </Wrapper>
);

export default ProjectCard;
