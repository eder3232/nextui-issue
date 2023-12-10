'use client'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const Providers: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Providers
