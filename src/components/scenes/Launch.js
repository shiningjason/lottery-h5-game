import * as launchAssetPaths from '@app/assets/launch/paths'
import loadAssets from '@app/utils/loadAssets'
import ContainerComponent from '../shared/Container'

export default class LaunchScene extends ContainerComponent {
  constructor({ onLaunched }) {
    super()
    loadAssets(launchAssetPaths).then(onLaunched)
  }
}
