import { Application } from 'pixi.js'
import { app as appConfig } from './configs'
import GameScene from '../scenes/Game'

export default class App {
  #app

  get view() {
    return this.#app.view
  }

  constructor() {
    this.#app = new Application(appConfig)
    this.#app.stage.addChild(new GameScene().view)
  }
}
