import { Hello, World, Ticker } from './components'

export const App = (): JSX.Element => {
  return (
    <div>
      <Hello />
      <World />
      <Ticker />
    </div>
  )
}
