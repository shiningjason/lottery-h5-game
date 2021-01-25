import { Container } from 'pixi.js'
import BaseComponent from './Base'

export default class ContainerComponent extends BaseComponent {
  constructor(component) {
    this.#element = new Container()
    component && this.addComponent(component)
  }
}
