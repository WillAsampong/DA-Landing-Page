import { useState } from 'react';
import PropTypes from 'prop-types';


const Input = ({ label, type, value, onChange }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => setFocused(true);
  return (
    <div className={`relative mb-4 ${focused ? 'mt-6' : 'mt-8'}`}>
       <label className={`absolute transition-all duration-300 ${focused ? 'text-xs text-gray-600' : 'text-base text-gray-400'} ${focused ? 'top-0' : 'top-2'}`}>
           {label}
      <input
       type={type} 
       value={value} 
       onChange={onChange} 
       onFocus={handleFocus}  
       className='w-full p-2 border-b-2 focus:outline-none'/>
       </label>
    </div>
  )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Input
