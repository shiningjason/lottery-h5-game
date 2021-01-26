import { Container } from 'pixi.js'
import ChipView from './Chip'

export default async function ChipBoxView({
  x,
  y,
  chipSize,
  chipGap,
  onChipChange
}) {
  const chipDollars = [1, 2, 5, 10, 20]
  const chipCount = chipDollars.length
  const view = new Container()
  view.x = x
  view.y = y
  view.width = chipSize * chipCount + chipGap * (chipCount - 1)
  view.height = chipSize
  const chipViews = await Promise.all(
    chipDollars.map((dollar, index) =>
      ChipView({
        dollar,
        x: index * (chipSize + chipGap),
        size: chipSize,
        onSelectChange: handleChipSelectChange
      })
    )
  )
  view.addChild(...chipViews)
  let selectedChip = null

  function handleChipSelectChange({ view, dollar, selected }) {
    if (selected) {
      for (const chipView of chipViews) {
        if (chipView !== view) chipView.deselect()
      }
    }
    const value = selected ? dollar : null
    if (value === selectedChip) return
    selectedChip = value
    onChipChange?.(value)
  }

  return view
}
