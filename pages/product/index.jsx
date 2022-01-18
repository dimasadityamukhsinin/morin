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

export default function Product() {
  return (
    <Layout>
      <div className="w-full h-full bg-m-s-lblue">
        <div className="relative w-full h-70vh rounded-b-3xl overflow-hidden text-center">
          <div className="relative w-full h-full setflex-center text-white z-2 setflex-center">
            <h1 className="text-h1 leading-none font-nutmeg font-bold text-center flex justify-center items-end">
              Our Products
            </h1>
            <span className="max-w-md mt-2">
              Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
              fermentum amet enim neque.
            </span>
          </div>
          <Image
            src={'/placeholder/product.png'}
            alt="Delightful"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Container className="w-full h-full flex flex-col space-y-6 mt-12 mb-10 px-10">
          <div className="flex w-full h-36rem bg-white rounded-2xl overflow-hidden">
            <div className="w-full basis-1/2 h-full flex flex-col justify-center pl-12 text-m-blue">
              <h2 className="text-h1 font-bold font-nutmeg">Spreads</h2>
              <p className="max-w-md mt-4 font-medium">
                Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
                fermentum amet enim neque fermentum amet enim neque fermentum
                amet enim neque.
              </p>
              <div className="inline-flex mt-8">
                <PillButton
                  destination="/products"
                  arrow="right"
                  stroke="#175BA7"
                  className="border-1 border-m-blue pt-1 px-4 font-medium"
                >
                  See All Spreads
                </PillButton>
              </div>
            </div>
            <div className="relative w-full h-full basis-1/2">
              <Image
                src="/placeholder/morin11.png"
                alt="Morin"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="flex w-full h-36rem bg-white rounded-2xl overflow-hidden">
            <div className="relative basis-1/2 w-full h-full">
              <Image
                src="/placeholder/morin12.png"
                alt="Morin"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="basis-1/2 w-full h-full flex flex-col justify-center pl-12 text-m-blue">
              <h2 className="text-h1 font-bold font-nutmeg">Jams</h2>
              <p className="max-w-md mt-4 font-medium">
                Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
                fermentum amet enim neque fermentum amet enim neque fermentum
                amet enim neque.
              </p>
              <div className="inline-flex mt-8">
                <PillButton
                  destination="/products"
                  arrow="right"
                  stroke="#175BA7"
                  className="border-1 border-m-blue pt-1 px-4 font-medium"
                >
                  See All Jams
                </PillButton>
              </div>
            </div>
          </div>
          <div className="flex w-full h-36rem bg-white rounded-2xl overflow-hidden">
            <div className="basis-1/2 w-full h-full flex flex-col justify-center pl-12 text-m-blue">
              <h2 className="text-h1 font-bold font-nutmeg">Toppings</h2>
              <p className="max-w-md mt-4 font-medium">
                Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
                fermentum amet enim neque fermentum amet enim neque fermentum
                amet enim neque.
              </p>
              <div className="inline-flex mt-8">
                <PillButton
                  destination="/products"
                  arrow="right"
                  stroke="#175BA7"
                  className="border-1 border-m-blue pt-1 px-4 font-medium"
                >
                  See All Toppings
                </PillButton>
              </div>
            </div>
            <div className="basis-1/2 relative w-full h-full">
              <Image
                src="/placeholder/morin13.png"
                alt="Morin"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="flex w-full h-36rem bg-white rounded-2xl overflow-hidden">
            <div className="relative basis-1/2 w-full h-full">
              <Image
                src="/placeholder/morin14.png"
                alt="Morin"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="basis-1/2 w-full h-full flex flex-col justify-center pl-12 text-m-blue">
              <h2 className="text-h1 font-bold font-nutmeg">Fillings</h2>
              <p className="max-w-md mt-4 font-medium">
                Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
                fermentum amet enim neque fermentum amet enim neque fermentum
                amet enim neque.
              </p>
              <div className="inline-flex mt-8">
                <PillButton
                  destination="/products"
                  arrow="right"
                  stroke="#175BA7"
                  className="border-1 border-m-blue pt-1 px-4 font-medium"
                >
                  See All Fillings
                </PillButton>
              </div>
            </div>
          </div>
        </Container>
        <Container className="px-10">
          <Footer />
        </Container>
      </div>
    </Layout>
  )
}
