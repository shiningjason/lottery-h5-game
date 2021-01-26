import { Graphics } from 'pixi.js'

export default function BetAreaView({ vertices, onClick }) {
  const view = new Graphics()
  view.interactive = true
  view.buttonMode = !!onClick

  view.beginFill(0xffffff, 0.1)
  view.lineStyle(4, 0x62ffa4)
  view.alpha = 0

  const [sx, sy] = vertices[0]
  view.moveTo(sx, sy)
  for (const [px, py] of vertices.slice(1)) view.lineTo(px, py)
  view.closePath()
  view.endFill()

  view.on('mouseover', () => handleHover(true))
  view.on('mouseout', () => handleHover(false))
  view.on('click', () => onClick?.())

  function handleHover(value) {
    view.alpha = value ? 1 : 0
  }

  return view
}
