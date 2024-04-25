import { createGlobalStyle, css } from 'styled-components';
import resetCss from './reset/resetCss';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`${css`
  ${resetCss}
  ${normalize}
`}
`;

export default GlobalStyles;
