import FancyLink from '../utils/fancyLink'
import Arrow from '../utils/arrow'

const PillButton = ({
  className,
  destination,
  arrow,
  children,
  onClick,
  loadMore = false,
  stroke,
  big= false,
  ...others
}) => {
  return (
    <FancyLink
      destination={destination}
      onClick={onClick}
      className={`pillbutton border-2 rounded-full transition-all ease-linear flex items-center whitespace-nowrap text-center ${className}`}
      {...others}
    >
      {arrow === 'left' ? (
        <Arrow position={arrow} className="mr-2 mb-1 block" stroke={stroke} />
      ) : (
        ''
      )}
      <span className="pt-px">{children}</span>
      {arrow === 'right' ? (
        <Arrow position={arrow} className="ml-2 mb-1 block" stroke={stroke} big={big} />
      ) : (
        ''
      )}
    </FancyLink>
  )
}

export default PillButton
