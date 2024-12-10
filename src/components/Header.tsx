import { observer } from 'mobx-react-lite'
import AppStore from '../stores/AppStore'

export const Header = observer((): JSX.Element => {
  return (
    <header className='header'>
      {AppStore.headerText}
    </header>
  )
})
