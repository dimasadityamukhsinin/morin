const Arrow = ({ className, position, stroke, big }) => {
  return (
    <>
      {position === 'top' ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`arrow ${className}`}
        >
          <path
            d="M23.857 11.9123C14.9607 7.26895 13.0441 1.1507 13.0441 1.09607L13.0155 0.986818L11.0417 0.986818L11.0131 1.09607C10.9845 1.1507 9.09654 7.26895 0.200238 11.9123L-5.65369e-07 11.9942L2.66031 14.9168L2.77473 14.8621C2.83194 14.8075 8.38141 11.3387 11.1561 5.79402C11.1275 6.80462 11.0131 8.71658 10.6698 10.0823C10.2122 12.0215 10.2694 15.2992 10.2694 15.3265L10.2694 23.7937L13.7306 23.7937L13.7306 15.3538C13.7306 15.3265 13.7878 12.0488 13.3302 10.1096C13.0155 8.74389 12.9011 6.80462 12.8439 5.82133C15.6186 11.366 21.1681 14.8348 21.2253 14.8895L21.3397 14.9441L24 12.0215L23.857 11.9123Z"
            fill="black"
          />
        </svg>
      ) : !big ? (
        <svg
          width="27"
          height="14"
          viewBox="0 0 27 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`arrow ${className}`}
        >
          {position === 'left' ? (
            <path
              d="M26 7H1M20.4444 1.5L26 7L20.4444 1.5ZM26 7L20.4444 12.5L26 7Z"
              stroke={stroke ? stroke : 'white'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : position === 'right' ? (
            <path
              d="M26 7H1M20.4444 1.5L26 7L20.4444 1.5ZM26 7L20.4444 12.5L26 7Z"
              stroke={stroke ? stroke : 'white'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : null}
        </svg>
      ) : (
        <svg
          width="35"
          height="23"
          viewBox="0 0 35 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6035 1.44438L33.0662 11.6232M33.0662 11.6232L22.7827 21.9832M33.0662 11.6232L1.32448 11.9002"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  )
}

export default Arrow
