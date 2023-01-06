import { useEffect } from 'react'

const usePageTitle = title => {
  useEffect(() => {
    document.title = `${title} | Reidy's Renos and Repairs`
  }, [title])
}

export default usePageTitle
