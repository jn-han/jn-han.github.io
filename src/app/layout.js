import './globals.css'


export const metadata = {
  title: 'Joshua Nguyen',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
