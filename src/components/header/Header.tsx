import { observer } from 'mobx-react-lite'
import AppStore from '../../stores/AppStore'

export const Header = observer(() => {
  return (
    <header className='header'>
      {AppStore.headerText}
    </header>
  )
})
