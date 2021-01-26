import BaseComponent from './Base'

export default class ContainerComponent extends BaseComponent {
  constructor(component) {
    super()
    component && this.addChild(component)
  }
}
