import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <p>Home</p>
      <UserButton afterSignOutUrl="/" />
    </>
  )
}

export default Home