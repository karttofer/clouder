import React from 'react'
import LogoNavbarComponent from './LogoNavbarComponent.jsx'
import clouderLogoWhite from '../../../assets/images/company-logo.svg'
import clouderLogoDark from '../../../assets/images/company-logo-dark.svg'

import { Box } from '@chakra-ui/react'

const NavbarComponent = ({ navbarType, isDark }) => {
  return (
    <nav role="navigation" aria-label="Main Navigation">
      <Box>
        {navbarType === 'logo' ? (
          <LogoNavbarComponent
            urlImg={isDark ? clouderLogoDark : clouderLogoWhite}
          />
        ) : (
          <p>asd</p>
        )}
      </Box>
    </nav>
  )
}

export default NavbarComponent
