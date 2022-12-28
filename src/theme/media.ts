// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line import/no-extraneous-dependencies
import {css} from 'styled-components';

const media = {
  desktop: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,

  print: (...args) => css`
    @page {
      size: auto A4 landscape;
      margin: 3mm;
    }

    @media print {
      ${css(...args)};
    }
  `,
};

export default media;
