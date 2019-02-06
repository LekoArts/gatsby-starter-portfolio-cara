import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

const Content = styled(ParallaxLayer)`
  ${tw`p-6 md:p-12 lg:p-24 justify-center items-center flex z-50`};
`

export default Content
