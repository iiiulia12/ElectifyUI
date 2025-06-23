import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ closeModal, children }) => (
  <div className={'fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50'}>
    <div
      className={
        'relative p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl w-[90%] max-w-4xl max-h-[80vh]  min-h-[35%] overflow-y-auto shadow-2xl shadow-blue-900/20'
      }>
      <button
        className={
          'absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full '
        }
        onClick={() => closeModal(false)}>
        <FontAwesomeIcon
          icon={faXmark}
          className={'hover:cursor-pointer h-5 w-5 text-white/60 group-hover:text-white/90 '}
        />
      </button>

      <div className={'flex-1 overflow-y-auto p-4 text-white'}>{children}</div>
    </div>
  </div>
)
