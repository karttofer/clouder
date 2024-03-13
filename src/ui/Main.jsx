// Dependencies
import React from 'react'
import { Container, Grid, GridItem } from '@chakra-ui/layout'

// Components
import MenuComponent from './components/MenuComponent.jsx'

const App = () => {
  return (
    <Container>
      <Grid
        templateAreas={'nav main'}
        h="100%"
        gridTemplateRows={'100vh '}
        gridTemplateColumns={'240px 1fr'}
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem rowSpan={1} colSpan={1} bg="layout.black.black900" area={'nav'}>
          <MenuComponent />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg="green.300" area={'main'}>
          Main
        </GridItem>
      </Grid>
    </Container>
  )
}
export default App
