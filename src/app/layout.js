
import './globals.css'
import { Nunito } from 'next/font/google'



export const metadata = {
  title: 'Joshua Nguyen',
  description: '',
}

const nunito = Nunito({
subsets: ['latin'],
variable: '--font-nunito'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} font-sans scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
