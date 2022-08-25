import React from 'react';
import './Input.css';

function Input(props)
{
	
	const {name,placeholder,value,type,onChange,iconClass,inputRef,extraConditions}=props
	return(
		<div className="form-input">
			 { (iconClass!=='')&& <span><i className={iconClass}></i></span>}
			<input {...extraConditions} name={name} placeholder={placeholder} onChange={onChange}  value={value} type={type} ref={inputRef}  required />
			
		</div>
	);
}

export default React.memo(Input)