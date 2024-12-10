import { Footer, Header, Main } from './components'
import './styles/app.scss'

export const App = (): JSX.Element => {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
