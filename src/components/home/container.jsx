export const Container = ({ children, css }) => (
  <div className={'flex flex-col justify-center items-center mx-[4vh] my-[15vh] relative'}>
    <div
      className={`bg-midnight-blue/90 rounded-2xl  shadow-lg w-full  flex flex-col relative min-h-screen overflow-hidden ${css}`}>
      {children}
    </div>
  </div>
)
