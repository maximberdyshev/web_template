import { observer } from 'mobx-react-lite'
import AppStore from '../../stores/AppStore'

export const Footer = observer(() => {
  return (
    <div className='footer'>
      {AppStore.footerText}
    </div>
  )
})
