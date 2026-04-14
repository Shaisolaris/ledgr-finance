import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'FinFlow — All Your Finances. One Powerful Platform.',
  description: 'Send, receive, and manage your money effortlessly fast, secure, and designed for everyday life.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
