import { Inter } from 'next/font/google'
import SwapPage from "@/components/SwapPage.1"

const inter = Inter({ subsets: ['latin'] })

export default function Swap() {
  return (
    <main className='bg-black'
    >
      <SwapPage />
    </main>
  )
}
