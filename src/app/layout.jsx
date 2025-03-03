import 'app/globals.css'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({ children }) {
  return (
    <html lang={'en'}>
      <body>
        <Header />
        <div className={'h-dvh'}>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
