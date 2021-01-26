import { Loader, Sprite, Spritesheet } from 'pixi.js'
import * as chipAssets from '@app/assets/chips'
import chipSpritesheet from '@app/assets/chips/spritesheet'
import loadAssets from '@app/utils/loadAssets'

const chipLoader = new Loader()
let chipAssetsPromise

function loadChipAssets() {
  if (!chipAssetsPromise) {
    chipAssetsPromise = (async () => {
      const textures = await loadAssets(chipAssets, chipLoader)
      const spritesheet = new Spritesheet(textures.chips, chipSpritesheet)
      return new Promise(resolve => spritesheet.parse(resolve))
    })()
  }
  return chipAssetsPromise
}

export default async function ChipView({
  dollar,
  x = 0,
  y = 0,
  size,
  onSelectChange
}) {
  const textures = await loadChipAssets()
  const view = new Sprite(textures[`$${dollar}`])
  view.x = x
  view.y = y
  view.width = size
  view.height = size
  view.pivot.x = size / 2
  view.pivot.y = size / 2
  view.interactive = true
  view.buttonMode = !!onSelectChange

  const scaleX = view.scale.x
  const scaleY = view.scale.y

  let selected = false
  view.select = () => handleSelect(true)
  view.deselect = () => handleSelect(false)
  view.on('click', () => handleSelect(!selected))

  function handleSelect(value) {
    if (value === selected) return
    selected = value
    view.scale.x = value ? scaleX * 1.1 : scaleX
    view.scale.y = value ? scaleY * 1.1 : scaleY
    onSelectChange?.({ view, dollar, selected })
  }

  return view
}
