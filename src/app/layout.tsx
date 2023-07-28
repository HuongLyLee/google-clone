import './globals.css'

export const metadata = {
  title: 'Google clone',
  description: 'Create by code for interview',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
