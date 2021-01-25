export default class BaseComponent {
  #element

  get element() {
    return this.#element
  }

  get x() {
    return this.#element.x
  }

  get y() {
    return this.#element.x
  }

  get width() {
    return this.#element.width
  }

  get height() {
    return this.#element.height
  }

  setPosition(x, y, animation) {
    this.#element.x = x
    this.#element.y = y
    return this
  }

  setWidth(width) {
    this.#element.width = width
    return this
  }

  setHeight(height) {
    this.#element.height = height
    return this
  }

  setSize(width, height, animation) {
    this.#element.width = width
    this.#element.height = height
    return this
  }

  setScale(scaleX, scaleY, animation) {
    this.#element.scale.x = scaleX
    this.#element.scale.y = scaleY
    return this
  }

  setRotation(rotation, animation) {
    this.#element.rotation = rotation
    return this
  }

  setAlpha(alpha, animation) {
    this.#element.alpha = alpha
    return this
  }

  setInteractive(interactive) {
    this.#element.interactive = interactive
    return this
  }

  addComponent(component) {
    this.addChild(component.getElement())
    return this
  }

  addChild(element) {
    this.#element.addChild(element)
    return this
  }

  removeChildren() {
    return this.#element.removeChildren()
  }

  on(event, callback) {
    this.#element.on(event, callback)
    return this
  }
}
