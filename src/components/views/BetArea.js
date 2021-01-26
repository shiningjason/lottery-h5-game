import { Graphics } from 'pixi.js'

export default function BetAreaView({ area, onClick }) {
  const view = new Graphics()
  view.interactive = true
  view.buttonMode = !!onClick

  view.beginFill(0xffffff, 0.1)
  view.lineStyle(4, 0x62ffa4)
  view.alpha = 1

  const points = area.split('_').map(xy => xy.split(',').map(n => +n))
  const [sx, sy] = points[0]
  view.moveTo(sx, sy)
  for (const [px, py] of points.slice(1)) view.lineTo(px, py)
  view.closePath()
  view.endFill()

  let hasBet = false
  let hovering = false
  view.placeBet = () => toggleBet(true)
  view.clearBet = () => toggleBet(false)
  view.on('mouseover', () => handleHover(true))
  view.on('mouseout', () => handleHover(false))
  view.on('click', () => onClick?.())

  function toggleBet(value) {
    hasBet = value
    view.alpha = value ? 1 : hovering ? 1 : 0
  }
  function handleHover(value) {
    // hovering = value
    // if (hasBet) return
    // view.alpha = value ? 1 : 0
  }

  return view
}
