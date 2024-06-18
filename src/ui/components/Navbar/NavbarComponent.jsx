import React from 'react'
import LogoNavbarComponent from './LogoNavbarComponent.jsx'
import ClouderLogo from '../../../assets/images/company-logo.svg'
import { Box } from '@chakra-ui/react'

const NavbarComponent = ({ navbarType }) => {
  return (
    <nav role="navigation" aria-label="Main Navigation">
      <Box>
        {navbarType === 'logo' ? (
          <LogoNavbarComponent urlImg={ClouderLogo} />
        ) : (
          <p>asd</p>
        )}
      </Box>
    </nav>
  )
}

export default NavbarComponent
