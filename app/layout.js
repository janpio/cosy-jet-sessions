import './globals.scss'

export const metadata = {
  title: 'Cosy Jet Sessions',
  description: 'Generated by me',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

