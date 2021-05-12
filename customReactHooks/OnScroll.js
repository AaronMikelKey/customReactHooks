//import React, { useEffect, useState } from 'react';

const OnScroll = () => {

  const [offset, setOffset] = useState(0)

  useEffect(() => {

    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }

  }, [])

  console.log(offset)

}

export default OnScroll