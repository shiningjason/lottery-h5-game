import { Application } from 'pixi.js'
import { app as appConfig } from './configs'
import launchAssetPaths from '@app/assets/launch/paths'
import ContainerComponent from '@app/components/Container'
import loadAssets from '@app/utils/loadAssets'

document.querySelector('#root').appendChild(renderApp().view)

function renderApp() {
  const app = new Application(appConfig)
  app.stage.addChild(renderGameContainer().element)
  return app
}

function renderGameContainer() {
  const gameContainer = new ContainerComponent()
  gameContainer.addComponent(renderLaunchScene())
  return gameContainer
}

function renderLaunchScene() {
  const launchScene = new ContainerComponent()
  loadAssets(launchAssetPaths)
  return launchScene
}
