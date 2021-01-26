import { Container } from 'pixi.js'
import ChipView from './Chip'

export default async function ChipBoxView({ x, y, chipSize, chipGap }) {
  const chipDollars = [1, 2, 5, 10, 20]
  const chipCount = chipDollars.length
  const view = new Container()
  view.x = x
  view.y = y
  view.width = chipSize * chipCount + chipGap * (chipCount - 1)
  view.height = chipSize
  view.addChild(
    ...(await Promise.all(
      chipDollars.map((dollar, index) =>
        ChipView({ dollar, x: index * (chipSize + chipGap), size: chipSize })
      )
    ))
  )
  return view
}
