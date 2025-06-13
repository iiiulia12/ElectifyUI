import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
export const Modal = ({ text, closeModal }) => (
  <div className={'fixed inset-0  flex items-center justify-center  backdrop-blur-xs '}>
    <div className={' p-6 bg-dark-cloudy/90 rounded-lg w-[35%] h-[35%] flex flex-col relative'}>
      <button
        className={' px-1 bg-cloudy/10 hover:bg-cloudy/70 border border-cloudy rounded-sm absolute top-3 right-3'}
        onClick={() => closeModal(false)}>
        <FontAwesomeIcon icon={faXmark} className={'h-6 w-6 text-white/40 '} />
      </button>
      <div className={'text-white/50 w-full h-full flex  items-center'}>
        <p className={' ml-[10%] '}>{text}</p>
      </div>
    </div>
  </div>
)
