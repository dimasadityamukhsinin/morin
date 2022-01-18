export default function Container({ children, className }) {
  return (
    <div
      className={`container max-w-screen-2xl mx-auto w-full ${className}`}
    >
      {children}
    </div>
  )
}
