import '../styles/globals.css'
import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import  Layout  from '../components/Layout'
import { StateContext } from '../context/StateContext'
import Router from 'next/router'
import Loader from '../components/Loader';

export default function App({ Component, pageProps }: AppProps) {

  //Router event loading
  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  return (
    <StateContext>
    <Layout>
      { loading &&  (
        <Loader/>
      )}
      <Component {...pageProps} />
    </Layout>
    </StateContext>
  )
}
