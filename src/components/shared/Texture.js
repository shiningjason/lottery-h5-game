import { Sprite } from 'pixi.js'
import BaseComponent from './Base'

export default class TextureComponent extends BaseComponent {
  constructor(path) {
    super()
    this.addChild(new Sprite(path /*TODO*/))
  }
}
