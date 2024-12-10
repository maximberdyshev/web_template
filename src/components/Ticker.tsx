import { observer } from 'mobx-react-lite'
import TimerStore from '../stores/TickerStore'

export const Ticker = observer((): JSX.Element => {
  return (
      <span>
        Timer: {TimerStore.seconds} sec
      </span>
  )
})
