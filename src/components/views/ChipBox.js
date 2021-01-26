import { Container } from 'pixi.js'
import ChipView from './Chip'

export default async function ChipBoxView({
  x,
  y,
  chipSize,
  chipGap,
  chipDollars,
  onChangeChip
}) {
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
        onSelectChange: handleSelectChip
      })
    )
  )
  view.addChild(...chipViews)
  let selectedChip = null

  function handleSelectChip({ view, dollar, selected }) {
    if (selected) {
      for (const chipView of chipViews) {
        if (chipView !== view) chipView.deselect()
      }
    }
    const value = selected ? dollar : null
    if (value === selectedChip) return
    selectedChip = value
    onChangeChip?.(value)
  }

  return view
}
