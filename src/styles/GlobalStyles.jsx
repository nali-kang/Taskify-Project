import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
blockquote,
body,
dd,
dl,
dt,
fieldset,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
html,
iframe,
legend,
li,
ol,
p,
pre,
textarea,
ul {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
ul {
  list-style: none;
}
button,
input,
select {
  margin: 0;
}
*,
html {
  box-sizing: border-box;
}
:after,
:before {
  box-sizing: inherit;
}
img,
video {
  height: auto;
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}

  // black이랑 gray는 앞에 색 두글자로 분류
  // violet 8%는 8p로 분류
  :root {
    --black-00: #000000;
    --black-17: #171717;
    --black-33: #333236;
    --black-4B: #4B4B4B;
    --gray-78: #787486;
    --gray-9F: #9FA6B2;
    --gray-D9: #D9D9D9;
    --gray-EE: #EEEEEE;
    --gray-FA: #FAFAFA;
    --white: #FFFFFF;
    --violet: #5534DA;
    --violet-8p: #F1EFFD;
    --red: #D6173A;
    --green: #7AC555;
    --purple: #760DDE;
    --orange: #FFA500;
    --blue: #76A5EA;
    --pink: #E876EA;
  }
`;

export default GlobalStyles;
