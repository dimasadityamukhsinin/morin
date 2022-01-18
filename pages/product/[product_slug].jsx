import FancyLink from '@/components/utils/fancyLink'
import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import Container from '@/components/modules/container'
import PillButton from '@/components/modules/pillButton'
import Footer from '@/components/modules/footer'
import Layout from '@/components/modules/layout'

// install Swiper modules
SwiperCore.use([Pagination])

export default function ProductSlug() {
  return (
    <Layout>
      <div className="w-full h-full overflow-hidden">
        <div className="relative w-full h-screen bg-m-s-lpink overflow-hidden">
          <div className="absolute w-full h-full top-1/2 scale-2">
            <Image
              src="/placeholder/pattern.png"
              alt="Morin"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="relative w-full h-full z-1 top-5 scale-110">
            <Image
              src="/placeholder/strawberry-background.png"
              alt="Morin"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="relative -top-3 z-2 w-full h-screen flex flex-col bg-m-n-ivory rounded-round-product">
          <div className="absolute -top-1/3 w-full h-96">
            <Image
              src="/placeholder/strawberry-product.png"
              alt="Morin"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="relative w-full h-2/5 basis-40% mb-6 flex justify-center items-end">
            <div className="absolute w-full max-w-4xl h-full">
              <Image
                src="/placeholder/product-banner.png"
                alt="Morin"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="w-auto h-auto shadow-normal py-1.5 bg-white rounded-full setflex-center-row">
              <PillButton
                destination="/products"
                className="border-none text-body py-1 px-6 text-m-blue font-semibold"
              >
                17gr
              </PillButton>
              <PillButton
                destination="/products"
                className="border-none text-body py-1 px-6 bg-m-blue text-white font-semibold"
              >
                170gr
              </PillButton>
              <PillButton
                destination="/products"
                className="border-none text-body py-1 px-6 text-m-blue font-semibold"
              >
                330gr
              </PillButton>
              <PillButton
                destination="/products"
                className="border-none text-body py-1 px-6 text-m-blue font-semibold"
              >
                590gr
              </PillButton>
            </div>
          </div>
          <div className="w-full h-3/5 basis-60% flex flex-col justify-between items-center">
            <p className="text-h2 font-nutmeg text-m-red text-center max-w-3xl leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing sit elit. Velit
              sit tincidunt morbi dolor ultrices ultrices et.
            </p>
            <PillButton
              destination="/products"
              className="border-none text-26px py-2 px-6 bg-m-blue text-white font-semibold"
            >
              Get This Product
            </PillButton>
          </div>
        </div>
        <div className="relative -top-9 w-full h-20vh bg-m-n-ivory"></div>
        <div className="relative -top-14 h-full w-full bg-m-s-peach rounded-3xl">
          <Container className="pt-10 pb-20 px-10 flex flex-col h-full">
            <div className="w-full text-center text-m-red">
              <h2 className="text-h1 font-nutmeg">Things you can make</h2>
            </div>
            <div className="grid gap-6 grid-cols-3 h-30rem mt-10">
              <FancyLink
                destination="/products"
                className="relative w-full overflow-hidden rounded-3xl"
              >
                <div className="relative z-1 text-white text-center w-full h-full py-5 flex flex-col justify-between items-center">
                  <h3 className="text-ctitle font-nutmeg max-w-18rem">
                    Mixed Berry Jam Tartlets
                  </h3>
                  <PillButton
                    arrow="right"
                    className="border-white p-3 mb-4"
                    big={true}
                  ></PillButton>
                </div>
                <div className="absolute h-full w-full top-0 left-0">
                  <Image
                    src={'/placeholder/mixed.png'}
                    alt="Delightful"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </FancyLink>
              <FancyLink
                destination="/products"
                className="relative w-full overflow-hidden rounded-3xl"
              >
                <div className="relative z-1 text-white text-center w-full h-full py-6 flex flex-col justify-between items-center">
                  <h3 className="text-ctitle font-nutmeg max-w-18rem">
                    Strawberry Trifle
                  </h3>
                  <PillButton
                    arrow="right"
                    className="border-white p-3 mb-4"
                    big={true}
                  ></PillButton>
                </div>
                <div className="absolute h-full w-full top-0 left-0">
                  <Image
                    src={'/placeholder/trifle.png'}
                    alt="Delightful"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </FancyLink>
              <FancyLink
                destination="/products"
                className="relative w-full overflow-hidden rounded-3xl"
              >
                <div className="relative z-1 text-white text-center w-full h-full py-6 flex flex-col justify-between items-center">
                  <h3 className="text-ctitle font-nutmeg max-w-18rem">
                    Chocolate Fudge Cupcakes
                  </h3>
                  <PillButton
                    arrow="right"
                    className="border-white p-3 mb-4"
                    big={true}
                  ></PillButton>
                </div>
                <div className="absolute h-full w-full top-0 left-0">
                  <Image
                    src={'/placeholder/delightful.png'}
                    alt="Delightful"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </FancyLink>
            </div>
          </Container>
        </div>
        <Container className="relative px-10 mb-10 -top-5 flex flex-col">
          <div className="w-full text-center text-m-red">
            <h2 className="text-h1 font-nutmeg">Similar Products</h2>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-4">
            <FancyLink
              destination="/product/blueberry-jam"
              className="relative w-full h-36rem shadow-product setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full basis-72% bg-m-s-lpurple">
                <Image
                  src="/placeholder/blueberry.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="w-full h-full basis-28% setflex-center">
                <span className="text-mtitle text-center mb-3 leading-tight px-6 font-nutmeg text-m-blue">
                  Blueberry Jam
                </span>
              </div>
              <div className="absolute z-2 w-full h-96 mb-20">
                <Image
                  src="/placeholder/blueberry-product.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </FancyLink>
            <FancyLink
              destination="/product/apricot-jam"
              className="relative w-full h-36rem shadow-product setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full basis-72% bg-m-s-lpurple">
                <Image
                  src="/placeholder/apricot.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="w-full h-full basis-28% setflex-center">
                <span className="text-mtitle text-center mb-3 leading-tight px-6 font-nutmeg text-m-blue">
                  Apricot Jam
                </span>
              </div>
              <div className="absolute z-2 w-full h-96 mb-20">
                <Image
                  src="/placeholder/apricot-product.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </FancyLink>
            <FancyLink
              destination="/product/raspberry-jam"
              className="relative w-full h-36rem shadow-product setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full basis-72% bg-m-s-lpink">
                <Image
                  src="/placeholder/raspberry.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="w-full h-full basis-28% setflex-center">
                <span className="text-mtitle text-center mb-3 leading-tight px-6 font-nutmeg text-m-blue">
                  Raspberry Jam
                </span>
              </div>
              <div className="absolute z-2 w-full h-96 mb-20">
                <Image
                  src="/placeholder/raspberry-product.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </FancyLink>
            <FancyLink
              destination="/product/pineapple-jam"
              className="relative w-full h-36rem shadow-product setflex-center rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative w-full h-full basis-72% bg-m-s-lyellow">
                <Image
                  src="/placeholder/pineapple.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="w-full h-full basis-28% setflex-center">
                <span className="text-mtitle text-center mb-3 leading-tight px-6 font-nutmeg text-m-blue">
                  Pineapple Jam
                </span>
              </div>
              <div className="absolute z-2 w-full h-96 mb-20">
                <Image
                  src="/placeholder/pineapple-product.png"
                  alt="Morin"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </FancyLink>
          </div>
        </Container>
        <Container className="px-10">
          <Footer />
        </Container>
      </div>
    </Layout>
  )
}
