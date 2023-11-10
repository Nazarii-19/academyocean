const adaptiveHelper = setIsMobile => {
  const match = matchMedia('(max-width: 768px)')
  match.addEventListener('change', event => {
    setIsMobile(event.matches)
  })
  setIsMobile(match.matches)
}

export default adaptiveHelper
