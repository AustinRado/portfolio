import { Roboto_Mono} from 'next/font/google'
import './globals.css'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Austin Rado',
  description: 'server',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
