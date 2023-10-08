
import './globals.css'
import { Nunito } from 'next/font/google'



export const metadata = {
  title: "Joshua Nguyen's Website",
  description: '',
}
const nunito = Nunito({
subsets: ['latin'],
variable: '--font-nunito'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} font-sans scroll-smooth`}>
      <link rel='icon' href='/favicon/favicon.ico'/>
      <body>{children}</body>
    </html>
  )
}
