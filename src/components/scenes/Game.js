import LaunchScene from './Launch'
import ContainerComponent from '../shared/Container'

export default class GameScene extends ContainerComponent {
  constructor() {
    super(new LaunchScene({ onLaunched: handleLaunch }))
    function handleLaunch() {}
  }
}
