export const metadata = {
  title: 'Blogs - Home',
  description: 'Blogs app home page',
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
