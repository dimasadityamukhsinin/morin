import FancyLink from '@/components/utils/fancyLink'
import Container from '@/components/modules/container'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'

export default function Header({ className = '', header }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-150 ease-linear ${className}`}
    >
      <Container
        className={`h-header px-10 relative pointer-events-auto setflex-center-row flex flex-wrap max-md:flex-nowrap max-md:pb-5 max-md:items-center max-md:pt-10 `}
      >
        <FancyLink
          destination="/"
          a11yText="Navigate to the home page"
          className="max-md:ml-3 max-md:p-0"
        >
          <img src={'/morin.png'} width={86} />
        </FancyLink>
        <nav
          className={`ml-auto shadow-navbar bg-white rounded-full setflex-center-row max-md:justify-end py-1 w-full text-sm md:text-sm md:w-auto transition-colors duration-300 ease-linear`}
        >
          <div className='py-1.5 px-5 space-x-8 font-medium'>
            <FancyLink
              destination="/about"
              a11yText="Navigate to the About Page"
              className="hover:opacity-60 transition-opacity ease-linear"
            >
              About
            </FancyLink>
            <FancyLink
              destination="/products"
              a11yText="Navigate to the Products Page"
              className="hover:opacity-60 transition-opacity ease-linear"
            >
              Products
            </FancyLink>
            <FancyLink
              destination="/recipes"
              a11yText="Navigate to the Recipes Page"
              className="hover:opacity-60 transition-opacity ease-linear"
            >
              Recipes
            </FancyLink>
            <FancyLink
              destination="/events"
              a11yText="Navigate to the Events Page"
              className="hover:opacity-60 transition-opacity ease-linear"
            >
              Events
            </FancyLink>
          </div>
          <FancyLink
            destination={''}
            blank={true}
            a11yText="Navigate to the about page"
            className="font-medium pt-1.5 pb-1 px-3 mr-1.5 text-white bg-m-blue rounded-full h-full hover:opacity-60 transition-opacity ease-linear"
          >
            Get Morin!
          </FancyLink>
        </nav>
      </Container>
    </header>
  )
}
