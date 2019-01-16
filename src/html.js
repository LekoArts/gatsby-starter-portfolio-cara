import React from 'react'
import PropTypes from 'prop-types'

const HTML = ({ htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents }) => (
  <html lang="en" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}

      <noscript
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Your browser has JavaScript disabled or does not support JavaScript. This website does not work properly without
        it. Any recently updated browser should display this page properly. This site is guarenteed to work on e.g. the
        latest Chrome or Firefox
        <br />
        <br />
        Sorry for the inconvenience.
      </noscript>
    </body>
  </html>
)

HTML.propTypes = {
  htmlAttributes: PropTypes.object.isRequired,
  headComponents: PropTypes.array.isRequired,
  bodyAttributes: PropTypes.object.isRequired,
  preBodyComponents: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
}

export default HTML
