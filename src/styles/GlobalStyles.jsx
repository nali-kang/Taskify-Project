import { createGlobalStyle, css } from 'styled-components';
import resetCss from './reset/resetCss';

const GlobalStyles = createGlobalStyle`${css`
  ${resetCss}
`}
`;

export default GlobalStyles;
