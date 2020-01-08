import React from 'react'

 const Alert = ({alert}) => {
    return (
      //   alert not equal to null then 
      alert !== null && (
         <div className={`alert alert-${alert.type}`}>
             <i className='fas fa-info-circle' /> {alert.msg}
         </div>
      )
    )
}

export default Alert