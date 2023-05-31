import { observer } from 'mobx-react-lite'
import AppStore from '../../stores/AppStore'

export const Main = observer(() => {
  return (
    <main className='main'>
      <p>{AppStore.mainText}</p>
      <button
        className='mainBtn'
        onClick={() => AppStore.clearText()}
      >
        Clear Text !!!
      </button>
    </main>
  )
})
