import FancyLink from '@/components/utils/fancyLink'
import Head from 'next/head'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import Container from '@/components/modules/container'
import PillButton from '@/components/modules/pillButton'
import Footer from '@/components/modules/footer'
import Layout from '@/components/modules/layout'
import Arrow from '@/components/utils/arrow'

export default function Faq() {
  return (
    <Layout>
      <div className="w-full h-full">
        <div className="relative w-full h-s-40 text-m-blue flex items-end justify-center">
          <h1 className="text-h1 leading-tight max-w-2xl font-nutmeg font-bold text-center">
            Frequently Asked Questions
          </h1>
        </div>
        <Container className="my-10 px-10 mt-14 grid gap-6 grid-cols-3">
          <FancyLink
            destination="/products"
            className="relative w-full h-30rem overflow-hidden rounded-3xl bg-m-s-lblue"
          >
            <div className="relative z-1 text-m-blue text-center w-full h-full py-5 flex flex-col justify-between items-center">
              <div className="w-full h-full setflex-center">
                <h3 className="text-mtitle text-center leading-tight font-nutmeg max-w-xs">
                  Where can I get recipes using your product?
                </h3>
              </div>
              <FancyLink
                destination="/"
                className="border-2 p-2 border-m-blue rounded-full"
              >
                <Arrow position="right" stroke="#175BA7" />
              </FancyLink>
            </div>
          </FancyLink>
          <FancyLink
            destination="/products"
            className="relative w-full h-30rem overflow-hidden rounded-3xl bg-m-s-lblue"
          >
            <div className="relative z-1 text-m-blue text-center w-full h-full py-5 flex flex-col justify-between items-center">
              <div className="w-full h-full setflex-center">
                <h3 className="text-mtitle text-center leading-tight font-nutmeg max-w-xs">
                  Where can I get recipes using your product?
                </h3>
              </div>
              <FancyLink
                destination="/"
                className="border-2 p-2 border-m-blue rounded-full"
              >
                <Arrow position="right" stroke="#175BA7" />
              </FancyLink>
            </div>
          </FancyLink>
          <FancyLink
            destination="/products"
            className="relative w-full h-30rem overflow-hidden rounded-3xl bg-m-s-lblue"
          >
            <div className="relative z-1 text-m-blue text-center w-full h-full py-5 flex flex-col justify-between items-center">
              <div className="w-full h-full setflex-center">
                <h3 className="text-mtitle text-center leading-tight font-nutmeg max-w-xs">
                  Where can I get recipes using your product?
                </h3>
              </div>
              <FancyLink
                destination="/"
                className="border-2 p-2 border-m-blue rounded-full"
              >
                <Arrow position="right" stroke="#175BA7" />
              </FancyLink>
            </div>
          </FancyLink>
        </Container>
        <Container className="px-10">
          <Footer />
        </Container>
      </div>
    </Layout>
  )
}
