import { Roboto_Mono} from 'next/font/google'
import './globals.css'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Portfolio',
  description: 'I am a fullstack software engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white text-gray-950`}>
      {children}        
      </body>
    </html>
  )
}
