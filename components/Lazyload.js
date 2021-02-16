import React from 'react'
import dynamic from 'next/dynamic'

const DefaultLoading = () => {
  return <div />
}

const Lazyload = (importFunc, loading = DefaultLoading, ssr = false) =>
  dynamic(importFunc, {
    ssr,
    loading,
  })

export default Lazyload
