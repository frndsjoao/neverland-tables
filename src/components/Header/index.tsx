import { Flex, Icon, IconButton, Link, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { Link as ScrollLink } from 'react-scroll'

export function Header () {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1440px"
      h="20"
      px={["4", "12"]}
      align="center"
      justify={["space-between" ,"space-evenly"]}
    >

      {!isWideVersion ? (
        <>
          <Logo />
          <IconButton
            aria-label='Open navigation'
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
          />
        </>
      ) : (
        <>
          <Link><ScrollLink to="products" spy smooth>PRODUTOS</ScrollLink></Link>
          <Link><ScrollLink to="about" spy smooth>SOBRE</ScrollLink></Link>
          <ScrollLink to="home" spy smooth>
            <Logo />
          </ScrollLink>
          <Link><ScrollLink to="feedbacks" spy smooth>FEEDBACKS</ScrollLink></Link>
          <Link><ScrollLink to="" spy smooth>HOME</ScrollLink></Link>
        </>
      )}
    </Flex>
  )
}