import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - Pokemon">
      <Button color="gradient">Click</Button>
    </Layout>
  )
}

export default HomePage