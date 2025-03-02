import type { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '../../components/application/Layout';

import * as styles from './NotFound.styles';

export const NotFound: FC = () => {
  return (
    <>
      <Helmet>
        <title>ページが見つかりませんでした</title>
        <style>
          {`
          @font-face {
            font-family: 'Noto Serif JP';
            font-style: normal;
            font-weight: 700;
            src: url('/fonts/NotoSerifJP-Bold-subset.woff') format('woff');
            font-display: block;
          },
          @font-face {
            font-family: 'Noto Serif JP';
            font-style: normal;
            font-weight: 400;
            src: url('/fonts/NotoSerifJP-Regular-subset.woff') format('woff');
            font-display: block;
            }`}
        </style>
      </Helmet>
      <Layout>
        <div className={styles.container()}>
          <div className={styles.inner()}>
            <p className={styles.mainParagraph()}>ページが存在しません</p>
            <p className={styles.subParagraph()}>Not Found</p>
          </div>
        </div>
      </Layout>
    </>
  );
};
