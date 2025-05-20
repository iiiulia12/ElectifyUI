export const Container = ({ children, css }) => (
  <div className={'flex justify-center items-center mx-[4vh] mt-[15vh]'}>
    <div className={`bg-midnight-blue/90 rounded-2xl  shadow-lg w-full h-[75vh] ${css}`}>{children}</div>
  </div>
)
