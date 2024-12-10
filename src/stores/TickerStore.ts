import { action, makeObservable, observable } from 'mobx'
import { ITickerStore } from './ifaces/ITickerStore'

class TickerStore implements ITickerStore {
  seconds: number = 0

  constructor () {
    makeObservable(this, {
      seconds: observable,

      countSeconds: action
    })
  }

  countSeconds (): void {
    this.seconds += 1
  }

  private startTicker = setInterval (() => this.countSeconds(), 1000)
}

export default new TickerStore()
