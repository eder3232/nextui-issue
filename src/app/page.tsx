'use client'
import { ThemeSwitcher } from '@/shared/components/ui/theme/theme-switcher'
import { Button } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      {/* hello world! */}
      {/* <Button
        color="primary"
        onClick={() => {
          alert('raaa!')
        }}
      >
        hola mundo!
      </Button> */}
      <ThemeSwitcher />
    </main>
  )
}
