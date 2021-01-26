import { Container } from 'pixi.js'

export default class BaseComponent {
  #view

  constructor(view = new Container()) {
    this.#view = view
  }

  get view() {
    return this.#view
  }

  get x() {
    return this.#view.x
  }

  get y() {
    return this.#view.x
  }

  get width() {
    return this.#view.width
  }

  get height() {
    return this.#view.height
  }

  setPosition(x, y, animation) {
    this.#view.x = x
    this.#view.y = y
    return this
  }

  setWidth(width) {
    this.#view.width = width
    return this
  }

  setHeight(height) {
    this.#view.height = height
    return this
  }

  setSize(width, height, animation) {
    this.#view.width = width
    this.#view.height = height
    return this
  }

  setScale(scaleX, scaleY, animation) {
    this.#view.scale.x = scaleX
    this.#view.scale.y = scaleY
    return this
  }

  setRotation(rotation, animation) {
    this.#view.rotation = rotation
    return this
  }

  setAlpha(alpha, animation) {
    this.#view.alpha = alpha
    return this
  }

  setInteractive(interactive) {
    this.#view.interactive = interactive
    return this
  }

  addChild(component) {
    this.#view.addChild(component.view)
    return this
  }

  removeChildren() {
    return this.#view.removeChildren()
  }

  on(event, callback) {
    this.#view.on(event, callback)
    return this
  }
}
