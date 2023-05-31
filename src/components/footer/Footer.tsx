import { observer } from 'mobx-react-lite'
import AppStore from '../../stores/AppStore'

export const Footer = observer(() => {
  return (
    <footer className='footer'>
      {AppStore.footerText}
    </footer>
  )
})
