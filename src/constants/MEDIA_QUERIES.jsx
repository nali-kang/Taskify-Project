const BREAKPOINTS = Object.freeze({
  TABLET: 768,
  PC: 1200,
  MOBILE: 768,
});

const MEDIA_QUERIES = Object.freeze({
  onPc: `@media only screen and (min-width: ${BREAKPOINTS.PC}px)`,
  onTablet: `@media only screen and (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.PC - 1}px)`,
  onMobile: `@media only screen and (max-width: ${BREAKPOINTS.MOBILE}px)`,
});

export default MEDIA_QUERIES;
