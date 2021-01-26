import { Container, Loader, Sprite } from 'pixi.js'
import * as launchAssets from '@app/assets/launch'
import loadAssets from '@app/utils/loadAssets'

const launchLoader = new Loader()

async function draw(bgView) {
  const textures = await loadAssets(launchAssets, launchLoader)
  bgView.addChild(new Sprite(textures.launchBg))
}

export default function LaunchScene() {
  const scene = new Container()
  const bgView = new Container()
  scene.addChild(bgView)
  draw(bgView)
  return scene
}
