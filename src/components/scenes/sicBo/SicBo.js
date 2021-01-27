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
  betChipPlacingStyle,
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

function animateBetChip(chipView, vertices) {
  const { max, min } = Math
  const { maxSize, minSize, margin } = betChipPlacingStyle
  const xs = vertices.map(([x]) => x)
  const ys = vertices.map(([, y]) => y)
  const maxX = max(...xs)
  const minX = min(...xs)
  const maxY = max(...ys)
  const minY = min(...ys)
  const width = maxX - minX
  const height = maxY - minY
  const maxWidth = width - margin * 2
  const maxHeight = height - margin * 2
  const chipSize = max(min(maxWidth, maxHeight, maxSize), minSize)
  const chipX = minX + (width - chipSize) / 2
  const chipY = minY + (height - chipSize) / 2
  TweenMax.to(chipView, 0.3, {
    x: chipX,
    y: chipY,
    width: chipSize,
    height: chipSize
  })
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
    animateBetChip(chipView, vertices)
  }

  return scene
}
