import { observer } from 'mobx-react-lite'
import AppStore from '../../stores/AppStore'

export const Header = observer(() => {
  return (
    <div className='header'>
      {AppStore.headerText}
    </div>
  )
})
