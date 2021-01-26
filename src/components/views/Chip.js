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

export default async function ChipView({ dollar, x = 0, y = 0, size, scale }) {
  const textures = await loadChipAssets()
  const view = new Sprite(textures[`$${dollar}`])
  view.x = x
  view.y = y
  view.width = size
  view.height = size
  return view
}
