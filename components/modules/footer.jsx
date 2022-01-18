import Container from './container'
import Image from 'next/image'
import FancyLink from '../utils/fancyLink'

const Footer = ({ className }) => {
  return (
    <footer
      className={`w-full h-auto flex bg-m-blue rounded-t-2xl text-white px-0 py-14 ${className}`}
    >
      <Container className="flex px-10">
        <div className="h-full max-w-lg w-full flex flex-col">
          <h2 className="text-mtitle font-bold font-nutmeg">
            Let's Stay In Touch!
          </h2>
          <span className="mt-5">
            Sign up for our weekly newsletter, new products, exclusive
            promotions, job openings, and more.
          </span>
          <form className="flex w-full mt-6 border-2 rounded-2xl overflow-hidden">
            <div className="relative flex w-full">
              <input
                className="w-full text-xs pt-2 pb-1.5 px-3 opacity-50 hover:opacity-100 tracking-wide placeholder-white  outline-none bg-transparent"
                type="email"
                placeholder="Your Email"
              />
              <FancyLink
                destination=""
                className="border-l-2 pt-2 pb-1.5 px-3 hover:bg-white hover:text-m-blue"
              >
                Submit
              </FancyLink>
            </div>
          </form>
        </div>
        <div className="w-full h-full flex justify-end space-x-40 mr-28">
          <div className="w-auto h-full flex flex-col justify-between">
            <FancyLink destination="/" className="text-white">
              Home
            </FancyLink>
            <FancyLink destination="/about" className="text-white">
              About Us
            </FancyLink>
            <FancyLink destination="/product" className="text-white">
              Product
            </FancyLink>
            <FancyLink destination="/recipes" className="text-white">
              Recipes
            </FancyLink>
            <FancyLink destination="/events" className="text-white">
              Events
            </FancyLink>
            <FancyLink destination="/" className="text-white">
              Get Morin
            </FancyLink>
          </div>
          <div className="w-auto h-full flex flex-col justify-between">
            <FancyLink destination="/faq" className="text-white">
              Faq
            </FancyLink>
            <FancyLink destination="/contact" className="text-white mt-2">
              Contact Us
            </FancyLink>
            <div className="w-full h-full flex flex-col justify-end space-y-4">
              <div className="flex justify-between w-full">
                <div className="relative w-36px h-36px">
                  <img
                    src={`/instagram-white.png`}
                    alt={'Instagram'}
                    className='w-full h-full'
                  />
                </div>
                <div className="relative w-36px h-36px">
                  <img
                    src={`/twitter-white.png`}
                    alt={'Twitter'}
                    className='w-full h-full'
                  />
                </div>
                <div className="relative w-36px h-36px">
                  <img
                    src={`/facebook-white.png`}
                    alt={'Facebook'}
                    className='w-full h-full'
                  />
                </div>
              </div>
              <span>© Morin Food 2021</span>
            </div>
          </div>
          {/* <div className="w-full h-full flex justify-end max-md:justify-start items-end max-md:items-start">
            <span className="text-sm">© Morin Food 2021</span>
          </div> */}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
