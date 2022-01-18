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

export default function Recipe() {
  return (
    <Layout>
      <div className="w-full h-full bg-m-s-lpink">
        <div className="relative w-full h-70vh rounded-b-3xl overflow-hidden text-center">
          <div className="relative w-full h-full setflex-center text-white z-2">
            <h1 className="text-h1 max-w-md leading-tight font-nutmeg font-bold text-center flex justify-center items-end">
              Recipes From Love
            </h1>
          </div>
          <Image
            src={'/placeholder/product.png'}
            alt="Delightful"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Container className="w-full px-10 mt-10 flex items-center justify-between">
          <span className="font-semibold text-m-red">Sorted by Default</span>
          <PillButton className="border-m-red py-2 px-3">
            <svg
              width="34"
              height="21"
              viewBox="0 0 34 21"
              className="w-32px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8269 2.53101C21.2982 2.53101 20.059 3.77024 20.059 5.29891C20.059 6.82758 21.2982 8.06681 22.8269 8.06681C24.3555 8.06681 25.5948 6.82758 25.5948 5.29891C25.5948 3.77024 24.3555 2.53101 22.8269 2.53101ZM1.849 5.9169H18.647C18.9461 7.95719 20.7035 9.5236 22.8269 9.5236C24.9502 9.5236 26.7076 7.95719 27.0067 5.9169H32.1499C32.5522 5.9169 32.8783 5.59078 32.8783 5.1885C32.8783 4.78622 32.5522 4.46011 32.1499 4.46011H26.9683C26.5792 2.5287 24.8729 1.07422 22.8269 1.07422C20.7808 1.07422 19.0745 2.5287 18.6854 4.46011H1.849C1.44672 4.46011 1.12061 4.78622 1.12061 5.1885C1.12061 5.59078 1.44672 5.9169 1.849 5.9169ZM15.3531 16.3181C15.0545 18.3588 13.2968 19.9258 11.1732 19.9258C9.04949 19.9258 7.29181 18.3588 6.99319 16.3181H1.849C1.44672 16.3181 1.12061 15.9919 1.12061 15.5897C1.12061 15.1874 1.44672 14.8613 1.849 14.8613H7.03193C7.42138 12.9304 9.12747 11.4764 11.1732 11.4764C13.2188 11.4764 14.9249 12.9304 15.3144 14.8613H32.1506C32.5528 14.8613 32.8789 15.1874 32.8789 15.5897C32.8789 15.9919 32.5528 16.3181 32.1506 16.3181H15.3531ZM8.40525 15.7011C8.40525 14.1724 9.64448 12.9332 11.1732 12.9332C12.7018 12.9332 13.9411 14.1724 13.9411 15.7011C13.9411 17.2297 12.7018 18.469 11.1732 18.469C9.64448 18.469 8.40525 17.2297 8.40525 15.7011Z"
                fill="#E82128"
              />
              <path
                d="M18.647 5.9169L18.8944 5.88064C18.8764 5.75788 18.7711 5.6669 18.647 5.6669V5.9169ZM27.0067 5.9169V5.6669C26.8826 5.6669 26.7773 5.75788 26.7593 5.88064L27.0067 5.9169ZM26.9683 4.46011L26.7232 4.50947C26.7467 4.62617 26.8492 4.71011 26.9683 4.71011V4.46011ZM18.6854 4.46011V4.71011C18.8045 4.71011 18.907 4.62617 18.9305 4.50947L18.6854 4.46011ZM15.3531 16.3181V16.0681C15.229 16.0681 15.1237 16.1591 15.1057 16.2819L15.3531 16.3181ZM6.99319 16.3181L7.24055 16.2819C7.22259 16.1591 7.11728 16.0681 6.99319 16.0681V16.3181ZM7.03193 14.8613V15.1113C7.15095 15.1113 7.25346 15.0274 7.27699 14.9107L7.03193 14.8613ZM15.3144 14.8613L15.0693 14.9107C15.0928 15.0274 15.1954 15.1113 15.3144 15.1113V14.8613ZM20.309 5.29891C20.309 3.90831 21.4363 2.78101 22.8269 2.78101V2.28101C21.1601 2.28101 19.809 3.63217 19.809 5.29891H20.309ZM22.8269 7.81681C21.4363 7.81681 20.309 6.68951 20.309 5.29891H19.809C19.809 6.96565 21.1601 8.31681 22.8269 8.31681V7.81681ZM25.3448 5.29891C25.3448 6.68951 24.2175 7.81681 22.8269 7.81681V8.31681C24.4936 8.31681 25.8448 6.96565 25.8448 5.29891H25.3448ZM22.8269 2.78101C24.2175 2.78101 25.3448 3.90831 25.3448 5.29891H25.8448C25.8448 3.63217 24.4936 2.28101 22.8269 2.28101V2.78101ZM18.647 5.6669H1.849V6.1669H18.647V5.6669ZM22.8269 9.2736C20.8294 9.2736 19.1757 7.79996 18.8944 5.88064L18.3997 5.95315C18.7165 8.11441 20.5777 9.7736 22.8269 9.7736V9.2736ZM26.7593 5.88064C26.478 7.79996 24.8243 9.2736 22.8269 9.2736V9.7736C25.076 9.7736 26.9372 8.11441 27.254 5.95315L26.7593 5.88064ZM32.1499 5.6669H27.0067V6.1669H32.1499V5.6669ZM32.6283 5.1885C32.6283 5.45271 32.4141 5.6669 32.1499 5.6669V6.1669C32.6903 6.1669 33.1283 5.72885 33.1283 5.1885H32.6283ZM32.1499 4.71011C32.4141 4.71011 32.6283 4.92429 32.6283 5.1885H33.1283C33.1283 4.64815 32.6903 4.21011 32.1499 4.21011V4.71011ZM26.9683 4.71011H32.1499V4.21011H26.9683V4.71011ZM22.8269 1.32422C24.7515 1.32422 26.3572 2.69247 26.7232 4.50947L27.2134 4.41074C26.8012 2.36493 24.9943 0.824219 22.8269 0.824219V1.32422ZM18.9305 4.50947C19.2965 2.69247 20.9022 1.32422 22.8269 1.32422V0.824219C20.6595 0.824219 18.8525 2.36493 18.4404 4.41074L18.9305 4.50947ZM1.849 4.71011H18.6854V4.21011H1.849V4.71011ZM1.37061 5.1885C1.37061 4.92429 1.58479 4.71011 1.849 4.71011V4.21011C1.30865 4.21011 0.870605 4.64815 0.870605 5.1885H1.37061ZM1.849 5.6669C1.58479 5.6669 1.37061 5.45271 1.37061 5.1885H0.870605C0.870605 5.72885 1.30865 6.1669 1.849 6.1669V5.6669ZM15.1057 16.2819C14.8248 18.2016 13.1709 19.6758 11.1732 19.6758V20.1758C13.4227 20.1758 15.2841 18.516 15.6005 16.3542L15.1057 16.2819ZM11.1732 19.6758C9.17538 19.6758 7.52147 18.2016 7.24055 16.2819L6.74582 16.3542C7.06215 18.516 8.9236 20.1758 11.1732 20.1758V19.6758ZM1.849 16.5681H6.99319V16.0681H1.849V16.5681ZM0.870605 15.5897C0.870605 16.13 1.30865 16.5681 1.849 16.5681V16.0681C1.58479 16.0681 1.37061 15.8539 1.37061 15.5897H0.870605ZM1.849 14.6113C1.30865 14.6113 0.870605 15.0493 0.870605 15.5897H1.37061C1.37061 15.3254 1.58479 15.1113 1.849 15.1113V14.6113ZM7.03193 14.6113H1.849V15.1113H7.03193V14.6113ZM7.27699 14.9107C7.64338 13.0942 9.24881 11.7264 11.1732 11.7264V11.2264C9.00612 11.2264 7.19938 12.7666 6.78686 14.8118L7.27699 14.9107ZM11.1732 11.7264C13.0975 11.7264 14.7029 13.0942 15.0693 14.9107L15.5594 14.8118C15.1469 12.7666 13.3402 11.2264 11.1732 11.2264V11.7264ZM15.3144 15.1113H32.1506V14.6113H15.3144V15.1113ZM32.1506 15.1113C32.4148 15.1113 32.6289 15.3254 32.6289 15.5897H33.1289C33.1289 15.0493 32.6909 14.6113 32.1506 14.6113V15.1113ZM32.6289 15.5897C32.6289 15.8539 32.4148 16.0681 32.1506 16.0681V16.5681C32.6909 16.5681 33.1289 16.13 33.1289 15.5897H32.6289ZM32.1506 16.0681H15.3531V16.5681H32.1506V16.0681ZM11.1732 12.6832C9.50641 12.6832 8.15525 14.0343 8.15525 15.7011H8.65525C8.65525 14.3105 9.78255 13.1832 11.1732 13.1832V12.6832ZM14.1911 15.7011C14.1911 14.0343 12.8399 12.6832 11.1732 12.6832V13.1832C12.5637 13.1832 13.6911 14.3105 13.6911 15.7011H14.1911ZM11.1732 18.719C12.8399 18.719 14.1911 17.3678 14.1911 15.7011H13.6911C13.6911 17.0917 12.5637 18.219 11.1732 18.219V18.719ZM8.15525 15.7011C8.15525 17.3678 9.50641 18.719 11.1732 18.719V18.219C9.78255 18.219 8.65525 17.0917 8.65525 15.7011H8.15525Z"
                fill="#E82128"
              />
            </svg>
          </PillButton>
        </Container>
        <Container className="my-10 px-10 flex flex-col">
          <div className="grid gap-6 grid-cols-3">
            <FancyLink
              destination="/products"
              className="relative w-full h-30rem overflow-hidden rounded-3xl"
            >
              <div className="relative z-1 text-white text-center w-full h-full py-5 flex flex-col justify-between items-center">
                <div className="w-full setflex-center">
                  <h3 className="text-ctitle leading-tight font-nutmeg max-w-18rem">
                    Mixed Berry Jam Tartlets
                  </h3>
                  <div className="setflex-center-row space-x-2 mt-3">
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      45 mins
                    </PillButton>
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      Easy
                    </PillButton>
                  </div>
                </div>
                <FancyLink
                  destination="/"
                  className="border-2 p-3 border-white rounded-full"
                >
                  <Arrow position="right" />
                </FancyLink>
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
              className="relative w-full h-30rem overflow-hidden rounded-3xl"
            >
              <div className="relative z-1 text-white text-center w-full h-full py-6 flex flex-col justify-between items-center">
                <div className="w-full setflex-center">
                  <h3 className="text-ctitle leading-tight font-nutmeg max-w-18rem">
                    Strawberry Trifle
                  </h3>
                  <div className="setflex-center-row space-x-2 mt-3">
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      45 mins
                    </PillButton>
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      Easy
                    </PillButton>
                  </div>
                </div>
                <FancyLink
                  destination="/"
                  className="border-2 p-3 border-white rounded-full"
                >
                  <Arrow position="right" />
                </FancyLink>
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
              className="relative w-full h-30rem overflow-hidden rounded-3xl"
            >
              <div className="relative z-1 text-white text-center w-full h-full py-6 flex flex-col justify-between items-center">
                <div className="w-full setflex-center">
                  <h3 className="text-ctitle leading-tight font-nutmeg max-w-18rem">
                    Chocolate Fudge Cupcakes
                  </h3>
                  <div className="setflex-center-row space-x-2 mt-3">
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      45 mins
                    </PillButton>
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      Easy
                    </PillButton>
                  </div>
                </div>
                <FancyLink
                  destination="/"
                  className="border-2 p-3 border-white rounded-full"
                >
                  <Arrow position="right" />
                </FancyLink>
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
            <FancyLink
              destination="/products"
              className="relative w-full h-30rem overflow-hidden rounded-3xl"
            >
              <div className="relative z-1 text-white text-center w-full h-full py-6 flex flex-col justify-between items-center">
                <div className="w-full setflex-center">
                  <h3 className="text-ctitle leading-tight font-nutmeg max-w-18rem">
                    Chocolate Fudge Cupcakes
                  </h3>
                  <div className="setflex-center-row space-x-2 mt-3">
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      45 mins
                    </PillButton>
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      Easy
                    </PillButton>
                  </div>
                </div>
                <FancyLink
                  destination="/"
                  className="border-2 p-3 border-white rounded-full"
                >
                  <Arrow position="right" />
                </FancyLink>
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
            <FancyLink
              destination="/products"
              className="relative w-full h-30rem overflow-hidden rounded-3xl"
            >
              <div className="relative z-1 text-white text-center w-full h-full py-6 flex flex-col justify-between items-center">
                <div className="w-full setflex-center">
                  <h3 className="text-ctitle leading-tight font-nutmeg max-w-18rem">
                    Chocolate Fudge Cupcakes
                  </h3>
                  <div className="setflex-center-row space-x-2 mt-3">
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      45 mins
                    </PillButton>
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      Easy
                    </PillButton>
                  </div>
                </div>
                <FancyLink
                  destination="/"
                  className="border-2 p-3 border-white rounded-full"
                >
                  <Arrow position="right" />
                </FancyLink>
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
            <FancyLink
              destination="/products"
              className="relative w-full h-30rem overflow-hidden rounded-3xl"
            >
              <div className="relative z-1 text-white text-center w-full h-full py-6 flex flex-col justify-between items-center">
                <div className="w-full setflex-center">
                  <h3 className="text-ctitle leading-tight font-nutmeg max-w-18rem">
                    Chocolate Fudge Cupcakes
                  </h3>
                  <div className="setflex-center-row space-x-2 mt-3">
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      45 mins
                    </PillButton>
                    <PillButton
                      destination=""
                      className="border-white py-0.5 px-4"
                    >
                      Easy
                    </PillButton>
                  </div>
                </div>
                <FancyLink
                  destination="/"
                  className="border-2 p-3 border-white rounded-full"
                >
                  <Arrow position="right" />
                </FancyLink>
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
          <div className="w-full mt-10">
            <PillButton className="border-m-red mx-auto font-semibold text-m-red py-1 px-3">
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
