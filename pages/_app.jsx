import '@/styles/main.scss'
import { DefaultSeo } from 'next-seo'
import Header from '@/components/modules/header.jsx'
import 'swiper/css'
import 'swiper/css/pagination'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        noindex={true}
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        // titleTemplate='%s | Locavore'
        defaultTitle="Morin Food"
        description="Description"
        openGraph={{
          type: 'website',
          locale: 'en_ID',
          url: 'website.site',
          site_name: 'Swwim',
          images: [
            {
              url: '/images/social-share.jpg',
              width: 800,
              height: 600,
            },
          ],
        }}
        twitter={{
          handle: '@twitter',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
