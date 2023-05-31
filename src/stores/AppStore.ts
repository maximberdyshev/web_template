import { action, makeObservable, observable } from 'mobx'

class AppStore {
  headerText: string = 'header'
  mainText: string = 'main'
  footerText: string = 'footer'

  constructor() {
    makeObservable(this, {
      headerText: observable,
      mainText: observable,
      footerText: observable,
      clearText: action
    })
  }

  clearText (): void {
    this.headerText = 'text cleared!'
    this.mainText = 'text cleared!'
    this.footerText = 'text cleared!'
  }
}

export default new AppStore()
