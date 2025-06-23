export const FormInput = ({ label, type, name, placeholder }) => (
  <div>
    <label className={'block text-blue-100 text-sm font-medium mb-2'}>{label}</label>
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className={`
                  w-full px-4 py-3 rounded-xl
                  bg-yellow/5 backdrop-blur-sm
                  border border-yellow/30
                  text-white placeholder-white/50
                  focus:outline-none focus:ring-2 focus:ring-midnight-blue/20 focus:border-secondary-very-dark/50
                  transition-all duration-300
                `}
    />
  </div>
)
