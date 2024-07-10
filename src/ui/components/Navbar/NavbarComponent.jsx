// Dependencies
import React from 'react'
import { Box } from '@chakra-ui/react'

// Components
import LogoNavbarComponent from 'Components/Navbar/LogoNavbarComponent.jsx'

// Assets
import clouderLogoWhite from 'Assets/images/company-logo.svg'
import clouderLogoDark from 'Assets/images/company-logo-dark.svg'

const NavbarComponent = ({ navbarType, isDark }) => {
  return (
    <nav role="navigation" aria-label="Main Navigation">
      <Box margin="10px">
        {navbarType === 'logo' ? (
          <LogoNavbarComponent
            urlImg={isDark ? clouderLogoDark : clouderLogoWhite}
          />
        ) : (
          <p>DEfault Navbar</p>
        )}
      </Box>
    </nav>
  )
}

export default NavbarComponent
