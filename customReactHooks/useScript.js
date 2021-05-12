import { useEffect } from 'react';

const useScript = (innerHtml, url) => {
  useEffect(() => {
    const script = document.createElement('script')
		innerHtml? script.innerHTML = innerHtml : ''
    url? script.src = url : null
    script.async = true
    document.head.prepend(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [innerHtml, url])
}

export default useScript