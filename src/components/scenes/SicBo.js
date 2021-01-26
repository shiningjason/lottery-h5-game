import { Container, Loader, Sprite } from 'pixi.js'
import * as sicBoAssets from '@app/assets/sicBo'
import loadAssets from '@app/utils/loadAssets'
import ChipBoxView from '../views/ChipBox'
import SicBoBetArea from '../views/SicBoBetArea'

const sicBoLoader = new Loader()

function TextureView({ texture, x, y, width, height, padding = [0, 0] }) {
  const view = new Sprite(texture)
  view.x = x
  view.y = y
  view.width = width
  view.height = height
  return view
}

function getSubViewStyle({ width, height, padding = [0, 0] }) {
  return {
    x: padding[0],
    y: padding[1],
    width: width - padding[0] * 2,
    height: height - padding[1] * 2
  }
}

export default async function SicBoScene({ width, height }) {
  const bgStyle = { width, height }
  const tableStyle = getSubViewStyle({ width, height, padding: [-60, 10] })
  const layoutStyle = getSubViewStyle({ width, height, padding: [100, 80] })

  const [textures, chipBoxView] = await Promise.all([
    loadAssets(sicBoAssets, sicBoLoader),
    ChipBoxView({
      x: 80,
      y: height - 80,
      chipSize: 60,
      chipGap: 12,
      onChipChange: handleChipChange
    })
  ])

  const scene = new Container()
  scene.addChild(
    TextureView({ texture: textures.sicBoBg, ...bgStyle }),
    TextureView({ texture: textures.sicBoTable, ...tableStyle }),
    TextureView({ texture: textures.sicBoLayout, ...layoutStyle }),
    SicBoBetArea(layoutStyle),
    chipBoxView
  )

  function handleChipChange(chip) {
    console.log('OnChipChange:', chip)
  }

  return scene
}
