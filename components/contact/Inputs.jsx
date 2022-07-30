import style from './Inputs.module.css'


const Inputs = ({type, name, value ,onChange, onBlur, htmlFor, id, label, error, touched}) => {
    return (
      <>
          <div className={` ${style.Inputs_label_Contact }  mb-10`}>
            
              <input 
                  type={type}
                  id={id}
                  autoComplete="off"
                  className={` ${style.input_contact }  absolute mt-1 px-3 py-3 outline-none bg-transparent border shadow-sm text-gray-900 
                  border-gray-400 placeholder-slate-400 
                  focus:outline-none w-full block rounded-md  ${error && touched ? "focus:border-red-400 border-red-400" : "focus:border-sky-400"} `}
                  
                  placeholder= " "
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  />
                  <label htmlFor={htmlFor} className={` ${style.label_contact }  text-gray-900`}>{label}</label>
          </div>
      </>
    )
  }
  
  export default Inputs