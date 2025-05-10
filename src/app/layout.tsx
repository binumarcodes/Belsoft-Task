import './globals.css'

export const metadata = {
  title: 'Belsoft Task',
  description: 'Frontend Challenge',
  icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
