import { useEffect, useState } from 'react'
import store from './index'

function subscribeHook() {
  const [update, setUpdate] = useState({})

  useEffect(() => {
    store.subscribe(() => {
      setUpdate({ ...update })
    })
  }, [])
}

export {
  subscribeHook
}