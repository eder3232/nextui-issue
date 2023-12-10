'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>The current theme is: {theme}</h1>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('purple-dark')}>Dark Mode</button>
    </div>
  )
}
