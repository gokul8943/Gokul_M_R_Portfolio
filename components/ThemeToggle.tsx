"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
                <FiMoon className="w-5 h-5 text-indigo-400" />
            )}
        </button>
    )
}
