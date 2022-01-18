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

export default function Event() {
  return (
    <Layout>
      <div className="w-full h-full bg-m-s-lblue">
        <div className="relative w-full h-70vh rounded-b-3xl overflow-hidden text-center">
          <div className="relative w-full h-full setflex-center text-white z-2">
            <h1 className="text-h1 max-w-md leading-tight font-nutmeg font-bold text-center flex justify-center items-end">
              Latest Events
            </h1>
          </div>
          <Image
            src={'/placeholder/product.png'}
            alt="Delightful"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Container className="px-10 mb-12 mt-14 flex flex-col">
          <div className="grid grid-cols-2 gap-6">
            <FancyLink
              destination="/product/blueberry-jam"
              className="relative w-full h-96 setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full aspect-square basis-72% bg-m-s-lpurple">
                <Image
                  src="/placeholder/morin7.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <div className="relative w-full h-auto p-5 flex justify-between">
                  <PillButton
                    destination=""
                    className="bg-white border-none py-1 px-3 text-m-blue font-semibold"
                  >
                    Group Event
                  </PillButton>
                  <FancyLink
                    destination="/"
                    className="border-2 p-2 border-white rounded-full"
                  >
                    <Arrow position="right" />
                  </FancyLink>
                </div>
              </div>
              <div className="w-full h-full basis-28% p-6 text-m-blue flex flex-col justify-between items-start">
                <span>24 Juli 2021</span>
                <span className="text-mtitle text-center mb-3 leading-tight font-nutmeg font-bold">
                  Morin in UPH
                </span>
              </div>
            </FancyLink>
            <FancyLink
              destination="/product/blueberry-jam"
              className="relative w-full h-96 setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full basis-72% bg-m-s-lpurple">
                <Image
                  src="/placeholder/morin7.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
                <div className="relative w-full h-auto p-5 flex justify-between">
                  <PillButton
                    destination=""
                    className="bg-white border-none py-1 px-3 text-m-blue font-semibold"
                  >
                    Group Event
                  </PillButton>
                  <FancyLink
                    destination="/"
                    className="border-2 p-2 border-white rounded-full"
                  >
                    <Arrow position="right" />
                  </FancyLink>
                </div>
              </div>
              <div className="w-full h-full basis-28% p-6 text-m-blue flex flex-col justify-between items-start">
                <span>24 Juli 2021</span>
                <span className="text-mtitle text-center mb-3 leading-tight font-nutmeg font-bold">
                  Morin in UPH
                </span>
              </div>
            </FancyLink>
            <FancyLink
              destination="/product/blueberry-jam"
              className="relative w-full h-96 setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full basis-72% bg-m-s-lpurple">
                <Image
                  src="/placeholder/morin7.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
                <div className="relative w-full h-auto p-5 flex justify-between">
                  <PillButton
                    destination=""
                    className="bg-white border-none py-1 px-3 text-m-blue font-semibold"
                  >
                    Group Event
                  </PillButton>
                  <FancyLink
                    destination="/"
                    className="border-2 p-2 border-white rounded-full"
                  >
                    <Arrow position="right" />
                  </FancyLink>
                </div>
              </div>
              <div className="w-full h-full basis-28% p-6 text-m-blue flex flex-col justify-between items-start">
                <span>24 Juli 2021</span>
                <span className="text-mtitle text-center mb-3 leading-tight font-nutmeg font-bold">
                  Morin in UPH
                </span>
              </div>
            </FancyLink>
            <FancyLink
              destination="/product/blueberry-jam"
              className="relative w-full h-96 setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full basis-72% bg-m-s-lpurple">
                <Image
                  src="/placeholder/morin7.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
                <div className="relative w-full h-auto p-5 flex justify-between">
                  <PillButton
                    destination=""
                    className="bg-white border-none py-1 px-3 text-m-blue font-semibold"
                  >
                    Group Event
                  </PillButton>
                  <FancyLink
                    destination="/"
                    className="border-2 p-2 border-white rounded-full"
                  >
                    <Arrow position="right" />
                  </FancyLink>
                </div>
              </div>
              <div className="w-full h-full basis-28% p-6 text-m-blue flex flex-col justify-between items-start">
                <span>24 Juli 2021</span>
                <span className="text-mtitle text-center mb-3 leading-tight font-nutmeg font-bold">
                  Morin in UPH
                </span>
              </div>
            </FancyLink>
          </div>
          <div className="w-full mt-10">
            <PillButton className="border-m-blue mx-auto font-semibold text-m-blue py-1 px-3">
              Show More
            </PillButton>
          </div>
        </Container>
        <Container className="px-10">
          <Footer />
        </Container>
      </div>
    </Layout>
  )
}
