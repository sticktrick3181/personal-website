const CheckAndAddDarkModeClass = () => {
  if (typeof document === 'undefined') return

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export default CheckAndAddDarkModeClass
