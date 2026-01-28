import React, { useEffect, useState } from 'react'

export default function useTheme() {
    const [theme, setTheme] = useState('dark')

    useEffect(()=> {
        const saved = localStorage.getItem('theme') || 'dark'
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
