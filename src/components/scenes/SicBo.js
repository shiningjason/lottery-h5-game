import { Container, Loader, Sprite } from 'pixi.js'
import * as sicBoAssets from '@app/assets/sicBo'
import loadAssets from '@app/utils/loadAssets'
import ChipBoxView from '../views/ChipBox'

const sicBoLoader = new Loader()

function BgView({ texture, width, height }) {
  const view = new Sprite(texture)
  view.width = width
  view.height = height
  return view
}

function TableView({ texture, width, height }) {
  const view = new Sprite(texture)
  const paddingX = -60
  const paddingY = 10
  view.x = paddingX
  view.y = paddingY
  view.width = width - paddingX * 2
  view.height = height - paddingY * 2
  return view
}

function LayoutView({ texture, width, height }) {
  const view = new Sprite(texture)
  const paddingX = 100
  const paddingY = 80
  view.x = paddingX
  view.y = paddingY
  view.width = width - paddingX * 2
  view.height = height - paddingY * 2
  return view
}

export default async function SicBoScene({ width, height }) {
  const [textures, chipBoxView] = await Promise.all([
    loadAssets(sicBoAssets, sicBoLoader),
    ChipBoxView({ x: 80, y: height - 80, chipSize: 60, chipGap: 12 })
  ])
  const scene = new Container()
  scene.addChild(BgView({ texture: textures.sicBoBg, width, height }))
  scene.addChild(TableView({ texture: textures.sicBoTable, width, height }))
  scene.addChild(LayoutView({ texture: textures.sicBoLayout, width, height }))
  scene.addChild(chipBoxView)
  return scene
}
