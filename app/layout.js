import './globals.css'

export const metadata = {
  title: 'Antony Cabeza | Frontend Developer',
  description: "Antony Cabeza's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
