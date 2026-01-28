import React, { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(()=> {
        const saved = localStorage.getItem('theme') as Theme || 'dark'
        setTheme(saved)
        document.documentElement.classList.toggle('light', saved === 'light')
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('light')
    }
  return {theme, toggleTheme}
}
