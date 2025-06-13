export const Container = ({ children, css }) => (
  <div className={'flex flex-col justify-center items-center mx-[4vh] mt-[15vh] relative'}>
    <div className={`bg-midnight-blue/90 rounded-2xl  shadow-lg w-full h-[75vh] flex flex-col ${css}`}>{children}</div>
  </div>
)
