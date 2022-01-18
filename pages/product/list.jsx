import FancyLink from '@/components/utils/fancyLink'
import Image from 'next/image'
import Container from '@/components/modules/container'
import Footer from '@/components/modules/footer'
import Layout from '@/components/modules/layout'

export default function ProductList() {
  return (
    <Layout>
      <div className="w-full h-full bg-m-s-lblue">
        <div className="relative w-full h-s-40 flex flex-col justify-end items-center text-m-blue text-center">
          <h1 className="text-h1 leading-none font-nutmeg font-bold text-center flex justify-center items-end">
            Jams
          </h1>
          <span className="max-w-md mt-2 font-semibold">
            Lorem nunc amet, placerat aliquam mauris sodales purus. Urna
            fermentum amet enim neque.
          </span>
        </div>
        <Container className="px-10 mb-12 mt-14 grid grid-cols-3 gap-6">
          <FancyLink
            destination="/product/blueberry-jam"
            className="relative w-full h-36rem setflex-center rounded-2xl overflow-hidden bg-white"
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
            destination="/product/strawberry-jam"
            className="relative w-full h-36rem setflex-center rounded-2xl overflow-hidden bg-white"
          >
            <div className="relative w-full h-full basis-72% bg-m-s-lpink">
              <Image
                src="/placeholder/strawberry.png"
                alt="Morin"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-full h-full basis-28% setflex-center">
              <span className="text-mtitle text-center mb-3 leading-tight px-6 font-nutmeg text-m-blue">
                Strawberry Jam
              </span>
            </div>
            <div className="absolute z-2 w-full h-96 mb-20">
              <Image
                src="/placeholder/strawberry-product.png"
                alt="Morin"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </FancyLink>
          <FancyLink
            destination="/product/pineapple-jam"
            className="relative w-full h-36rem setflex-center rounded-2xl overflow-hidden bg-white"
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
          <FancyLink
            destination="/product/raspberry-jam"
            className="relative w-full h-36rem setflex-center rounded-2xl overflow-hidden bg-white"
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
            destination="/product/apricot-jam"
            className="relative w-full h-36rem setflex-center rounded-2xl overflow-hidden bg-white"
          >
            <div className="relative w-full h-full basis-72% bg-m-s-lorange">
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
            destination="/product/mixedfruit-jam"
            className="relative w-full h-36rem setflex-center rounded-2xl overflow-hidden bg-white"
          >
            <div className="relative w-full h-full basis-72% bg-m-s-lpink">
              <Image
                src="/placeholder/mixedfruit.png"
                alt="Morin"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-full h-full basis-28% setflex-center">
              <span className="text-mtitle text-center mb-3 leading-tight px-6 font-nutmeg text-m-blue">
                Mixed Fruit Jam
              </span>
            </div>
            <div className="absolute z-2 w-full h-96 mb-20">
              <Image
                src="/placeholder/mixedfruit-product.png"
                alt="Morin"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </FancyLink>
          <FancyLink
            destination="/product/orange-jam"
            className="relative w-full h-36rem setflex-center rounded-2xl overflow-hidden bg-white"
          >
            <div className="relative w-full h-full basis-72% bg-m-s-lorange">
              <Image
                src="/placeholder/orange.png"
                alt="Morin"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="w-full h-full basis-28% setflex-center">
              <span className="text-mtitle text-center mb-3 leading-tight px-6 font-nutmeg text-m-blue">
                Orange Marmalade Jam
              </span>
            </div>
            <div className="absolute z-2 w-full h-96 mb-20">
              <Image
                src="/placeholder/orange-product.png"
                alt="Morin"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
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
