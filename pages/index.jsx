import FancyLink from '@/components/utils/fancyLink'
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

export default function Home() {
  return (
    <Layout>
      <div className="h-full w-full bg-white">
        <Swiper loop={true} pagination={true}>
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="relative w-full h-full px-48 text-white z-2 setflex-center">
                <div className="w-full h-full">
                  <h1 className="text-h1 h-55vh leading-none font-nutmeg font-bold text-center flex justify-center items-end">
                    A delightful experience in every bite.
                  </h1>
                </div>
                <div className="w-full h-full flex justify-center">
                  <PillButton
                    destination="/products"
                    arrow="right"
                    className="absolute mt-16 border-1 border-white pt-1 px-4 text-white font-medium"
                  >
                    Find Out More
                  </PillButton>
                </div>
              </div>
              <div className="w-full h-full">
                <Image
                  src={'/placeholder/delightful.png'}
                  alt="Delightful"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="relative w-full h-full px-48 text-white z-2 setflex-center">
                <div className="w-full h-full">
                  <h1 className="text-h1 h-55vh leading-none font-nutmeg font-bold text-center flex justify-center items-end">
                    A delightful experience in every bite.
                  </h1>
                </div>
                <div className="w-full h-full flex justify-center">
                  <PillButton
                    destination="/products"
                    arrow="right"
                    className="absolute mt-16 border-1 border-white pt-1 px-4 text-white font-medium"
                  >
                    Find Out More
                  </PillButton>
                </div>
              </div>
              <div className="w-full h-full">
                <Image
                  src={'/placeholder/delightful.png'}
                  alt="Delightful"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-screen">
              <div className="relative w-full h-full px-48 text-white z-2 setflex-center">
                <div className="w-full h-full">
                  <h1 className="text-h1 h-55vh leading-none font-nutmeg font-bold text-center flex justify-center items-end">
                    A delightful experience in every bite.
                  </h1>
                </div>
                <div className="w-full h-full flex justify-center">
                  <PillButton
                    destination="/products"
                    arrow="right"
                    className="absolute mt-16 border-1 border-white pt-1 px-4 text-white font-medium"
                  >
                    Find Out More
                  </PillButton>
                </div>
              </div>
              <div className="w-full h-full">
                <Image
                  src={'/placeholder/delightful.png'}
                  alt="Delightful"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-full w-full">
        <Container className="relative h-screen w-full flex pl-10 pr-0">
          <div className="relative w-1/2 h-full pt-10 pr-10 flex flex-col">
            <span className="font-nutmeg text-ctitleSmall text-m-blue">
              Jodohnya Roti! Ipsum dolor amet dolor sit amet esensia met lorem
              ipsum dolor sit iterimet ipsum andame sit lorem ipsum.
            </span>
            <div className="w-full inline-flex">
              <PillButton
                destination="/products"
                arrow="right"
                stroke="#175BA7"
                className="border-m-blue border-1 text-m-blue mt-6 pt-1 px-4 font-medium"
              >
                See All Products
              </PillButton>
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute bottom-0 left-0 z-2 p-8 flex justify-between items-end w-full">
              <span className="text-h1 text-white font-nutmeg">Spreads</span>
              <PillButton
                destination="/products"
                arrow="right"
                className="border-white p-3 mb-4"
                big={true}
              ></PillButton>
            </div>
            <Image
              src="/placeholder/morin1.png"
              alt="Morin"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </Container>
      </div>
      <div className="relative -top-5 h-full w-full bg-m-s-peach rounded-t-3xl">
        <Container className="pt-10 pb-20 px-10 flex flex-col h-full">
          <div className="flex justify-between items-center text-m-red">
            <div>
              <h2 className="text-h1 font-nutmeg">Recipes from Love</h2>
              <span className="font-medium max-w-2xl block">
                Lorem nunc amet, placerat aliquam mauris sodales purus. Urna,
                fermentum amet enim neque, nunc semper sit id sit fermentum amet
                enim.
              </span>
            </div>
            <div>
              <PillButton
                destination="/products"
                arrow="right"
                stroke="#E82128"
                className="border-m-red font-semibold pt-1 px-4"
              >
                See All Recipes
              </PillButton>
            </div>
          </div>
          <div className="grid gap-6 grid-cols-3 h-30rem mt-12">
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
                <h3 className="text-ctitle font-nutmeg max-w-18rem">Strawberry Trifle</h3>
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
      <div className="relative -top-10 h-full w-full bg-m-s-lblue rounded-3xl">
        <Container className="pt-10 pb-24 flex flex-col h-full">
          <div className="flex justify-between items-center px-10 text-m-blue">
            <div className="relative">
              <h2 className="text-h1 font-nutmeg">Events Highlight</h2>
              <img
                className="absolute right-0 bottom-0"
                src={'/bluepattern.png'}
              />
            </div>
            <div>
              <PillButton
                destination="/products"
                arrow="right"
                stroke="#175BA7"
                className="border-m-blue font-semibold pt-1 px-4"
              >
                See All Recipes
              </PillButton>
            </div>
          </div>
          <div className="relative w-full h-56 mt-12">
            <div className="absolute left-0 w-full h-full flex">
              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                slideToClickedSlide={true}
                id="swiper-recipe"
              >
                <SwiperSlide className="ml-10">
                  <div className="cursor-pointer relative w-full h-full bg-white text-m-blue flex rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={'/placeholder/morin7.png'}
                        alt="Delightful"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full h-full p-5 flex flex-col justify-between items-start">
                      <div>
                        <span>24 Juli 2021</span>
                        <h3 className="text-ctitle mt-2 leading-tight font-nutmeg font-bold">
                          Morin in UPH
                        </h3>
                      </div>
                      <PillButton
                        destination="/products"
                        arrow="right"
                        stroke="#175BA7"
                        className="border-none font-semibold"
                      >
                        See Events
                      </PillButton>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full bg-white text-m-blue flex rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={'/placeholder/morin6.png'}
                        alt="Delightful"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full h-full py-5 pl-5 pr-16 flex flex-col justify-between items-start">
                      <div>
                        <span>24 Juli 2021</span>
                        <h3 className="text-ctitle mt-2 leading-tight font-nutmeg font-bold">
                          Cooking Workshop
                        </h3>
                      </div>
                      <PillButton
                        destination="/products"
                        arrow="right"
                        stroke="#175BA7"
                        className="border-none font-semibold"
                      >
                        See Events
                      </PillButton>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full bg-white text-m-blue flex rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={'/placeholder/morin7.png'}
                        alt="Delightful"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full h-full py-5 pl-5 pr-16 flex flex-col justify-between items-start">
                      <div>
                        <span>24 Juli 2021</span>
                        <h3 className="text-ctitle mt-2 leading-none font-nutmeg font-bold">
                          Morin in UPH
                        </h3>
                      </div>
                      <PillButton
                        destination="/products"
                        arrow="right"
                        stroke="#175BA7"
                        className="border-none font-semibold"
                      >
                        See Events
                      </PillButton>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full bg-white text-m-blue flex rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={'/placeholder/delightful.png'}
                        alt="Delightful"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full h-full py-5 pl-5 pr-16 flex flex-col justify-between items-start">
                      <div>
                        <span>24 Juli 2021</span>
                        <h3 className="text-ctitle mt-2 leading-none font-nutmeg font-bold">
                          Morin in UPH
                        </h3>
                      </div>
                      <PillButton
                        destination="/products"
                        arrow="right"
                        stroke="#175BA7"
                        className="border-none font-semibold"
                      >
                        See Events
                      </PillButton>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full bg-white text-m-blue flex rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={'/placeholder/delightful.png'}
                        alt="Delightful"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full h-full py-5 pl-5 pr-16 flex flex-col justify-between items-start">
                      <div>
                        <span>24 Juli 2021</span>
                        <h3 className="text-ctitle mt-2 leading-none font-nutmeg font-bold">
                          Morin in UPH
                        </h3>
                      </div>
                      <PillButton
                        destination="/products"
                        arrow="right"
                        stroke="#175BA7"
                        className="border-none font-semibold"
                      >
                        See Events
                      </PillButton>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="cursor-pointer relative w-full h-full bg-white text-m-blue flex rounded-2xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={'/placeholder/delightful.png'}
                        alt="Delightful"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full h-full py-5 pl-5 pr-16 flex flex-col justify-between items-start">
                      <div>
                        <span>24 Juli 2021</span>
                        <h3 className="text-ctitle mt-2 leading-none font-nutmeg font-bold">
                          Morin in UPH
                        </h3>
                      </div>
                      <PillButton
                        destination="/products"
                        arrow="right"
                        stroke="#175BA7"
                        className="border-none font-semibold"
                      >
                        See Events
                      </PillButton>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative -top-20 h-full w-full bg-white rounded-3xl">
        <Container className="pt-10 pb-20 flex flex-col h-full">
          <div className="flex items-center justify-between px-10 text-m-blue">
            <div className="relative">
              <h2 className="text-mtitle font-nutmeg">
                Get Daily Inspirations from our Social Media
              </h2>
            </div>
            <div>
              <PillButton
                destination="/products"
                className="border-none text-body pt-1 px-3 bg-m-blue text-white font-semibold"
              >
                @morin_jam
              </PillButton>
            </div>
          </div>
          <div className="relative w-full h-72 mt-12">
            <div className="absolute left-0 w-full h-full flex space-x-3">
              <Swiper
                loop={true}
                slidesPerView="auto"
                spaceBetween={20}
                slideToClickedSlide={true}
                centeredSlides={true}
                id="swiper-socmed"
              >
                <SwiperSlide>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={'/placeholder/morin10.png'}
                      alt="Delightful"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={'/placeholder/morin9.png'}
                      alt="Delightful"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={'/placeholder/morin5.png'}
                      alt="Delightful"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={'/placeholder/morin8.png'}
                      alt="Delightful"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
      <Container className="px-10">
        <Footer />
      </Container>
    </Layout>
  )
}
