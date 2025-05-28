import 'app/globals.css'
import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { ReactQueryProvider } from 'reactQueryProvider'

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({ children }) {
  return (
    <html lang={'en'}>
      <body>
        <Header />
        <ReactQueryProvider>
          <div className={'min-h-screen'}>{children}</div>
        </ReactQueryProvider>
        <Footer />
      </body>
    </html>
  )
}
