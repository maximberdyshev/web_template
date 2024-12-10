import { observer } from 'mobx-react-lite'
import AppStore from '../stores/AppStore'
import { Ticker } from './Ticker'

export const Main = observer((): JSX.Element => {
  return (
    <main className='main'>
      <p>{AppStore.mainText}</p>
      <button
        className='mainBtn'
        onClick={() => AppStore.clearText()}
      >
        Clear Text !!!
      </button>

      <p><Ticker /></p>
    </main>
  )
})
