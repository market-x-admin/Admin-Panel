import React from 'react'
import { Bars } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className=' flex items-center justify-center'>
<Bars
  height="80"
  width="80"
  color="#1ebbd7"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  )
}

export default Loader