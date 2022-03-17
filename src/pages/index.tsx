import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'

import { HomePage } from './Home'
import { ProductsPage } from './Products'
import { FeedbacksPage } from './Feedbacks'

export default function SignIn() {
  return (
    <Flex align="center" direction="column">
      <Header />

      <HomePage id="home" />
      <ProductsPage id="products" />
      <FeedbacksPage id="feedbacks" />

    </Flex>
  )
}
