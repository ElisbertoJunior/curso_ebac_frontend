import React from 'react'
import  './header.css'

const Header = ({ address, name }) => {
  //const { address, name } = props;
  return (
    <div>
      <img className='img-perfil' src={address}/>
      <h3 className='prefil-title'>{name}</h3>
    </div>
  )
}

export default Header