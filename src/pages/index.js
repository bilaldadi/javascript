import Head from 'next/head';
import { usePageView } from '../hooks/use-page-view';
import { Layout as MarketingLayout } from '../layouts/marketing';
import { HomeCta } from '../sections/home/home-cta';
import { HomeFaqs } from '../sections/home/home-faqs';
import { HomeFeatures } from '../sections/home/home-features';
import { HomeHero } from '../sections/home/home-hero';
import { HomeReviews } from '../sections/home/home-reviews';

const Page = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Batahaf Dashboard
        </title>
      </Head>
      <main>
        <HomeHero />
      </main>
    </>
  );
};


export default Page;
