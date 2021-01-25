import { Container, Sprite } from 'pixi.js'
import BaseComponent from './Base'

export default class TextureComponent extends BaseComponent {
  constructor(path) {
    this.#element = new Container()
    this.addChild(new Sprite(path /*TODO*/))
  }
}
