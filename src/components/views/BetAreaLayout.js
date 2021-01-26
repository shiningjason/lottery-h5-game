import { Container } from 'pixi.js'
import BetAreaView from '@app/components/views/BetArea'

export default function BetAreaLayoutView({ width, height, areas, onClickArea }) {
  const view = new Container()
  view.width = width
  view.height = height
  for (const { type, vertices } of areas) {
    const handleClick = () => onClickArea?.({ type, vertices })
    view.addChild(BetAreaView({ vertices, onClick: handleClick }))
  }
  return view
}
