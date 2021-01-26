import anime from 'animejs'
import { TweenMax } from 'gsap'
import { Container, Loader, Sprite } from 'pixi.js'
import * as sicBoAssets from '@app/assets/sicBo'
import BetAreaLayout from '@app/components/views/BetAreaLayout'
import ChipView from '@app/components/views/Chip'
import ChipBoxView from '@app/components/views/ChipBox'
import loadAssets from '@app/utils/loadAssets'
import {
  getTableStyle,
  getLayoutStyle,
  getChipBoxStyle,
  getBetChipStyle,
  betAreas as areas
} from './settings'

const sicBoLoader = new Loader()

function TextureView({ texture, x, y, width, height }) {
  const view = new Sprite(texture)
  view.x = x
  view.y = y
  view.width = width
  view.height = height
  return view
}

export default async function SicBoScene({ width, height }) {
  const bgStyle = { width, height }
  const tableStyle = getTableStyle(width, height)
  const layoutStyle = getLayoutStyle(width, height)
  const chipBoxStyle = getChipBoxStyle(width, height)
  const betChipStyle = getBetChipStyle(width, height)

  const [textures, chipBoxView] = await Promise.all([
    loadAssets(sicBoAssets, sicBoLoader),
    ChipBoxView({ ...chipBoxStyle, onChangeChip: handleChangeChip })
  ])

  const scene = new Container()
  scene.addChild(
    TextureView({ texture: textures.sicBoBg, ...bgStyle }),
    TextureView({ texture: textures.sicBoTable, ...tableStyle }),
    TextureView({ texture: textures.sicBoLayout, ...layoutStyle }),
    BetAreaLayout({ areas, onClickArea: handleClickArea, ...layoutStyle }),
    chipBoxView
  )

  let currentChip = null

  function handleChangeChip(chip) {
    currentChip = chip
  }

  async function handleClickArea({ type, vertices }) {
    if (!currentChip) return
    const chipView = await ChipView({ dollar: currentChip, ...betChipStyle })
    scene.addChild(chipView)
    anime({ targets: chipView, x: 0, y: 0, duration: 300, easing: 'easeInOutSine' }) 
    // TweenMax.to(chipView, 0.3, { x: 0, y: 0 })
  }

  return scene
}
