import { observer } from 'mobx-react-lite'
import TickerStore from '../stores/TickerStore'

export const Ticker = observer((): JSX.Element => {
  return (
    <h4>
      Ticker: {TickerStore.seconds} sec
    </h4>
  )
})
