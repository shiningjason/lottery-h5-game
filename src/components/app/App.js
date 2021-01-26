import { Application, Container } from 'pixi.js'
import LaunchScene from '@app/components/scenes/Launch'
import SicBoScene from '@app/components/scenes/sicBo/SicBo'
import * as configs from './configs'

function Navigation() {
  const navigation = new Container()
  const launchScene = LaunchScene()
  navigation.addChild(launchScene)
  ;(async () => {
    const sicBoScene = await SicBoScene(configs.scene)
    navigation.removeChild(launchScene)
    navigation.addChild(sicBoScene)
  })()
  return navigation
}

export default function App() {
  const app = new Application(configs.app)
  app.stage.addChild(Navigation())
  return app
}
