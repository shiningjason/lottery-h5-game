import { Application, Container } from 'pixi.js'
import * as configs from './configs'
import LaunchScene from '../scenes/Launch'
import SicBoScene from '../scenes/SicBo'

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
