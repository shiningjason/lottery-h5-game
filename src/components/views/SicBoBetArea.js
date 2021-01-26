import { Container } from 'pixi.js'
import { SicBoMarketType } from '@app/constants/marketTypes'
import BetAreaView from './BetArea'

const betAreas = [
  { type: SicBoMarketType.Small, area: '118,102_118,260_308,260_308,102' },
  { type: SicBoMarketType.Big, area: '968,102_968,260_1158,260_1158,102' },
  { type: SicBoMarketType.TripleAny, area: '558,102_558,260_720,260_720,102' },
  { type: SicBoMarketType.Triple1, area: '328,102_328,260_308,260_308,102' },
  // { type: SicBoMarketType.Triple2, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Triple3, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Triple4, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Triple5, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Triple6, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Double1, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Double2, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Double3, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Double4, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Double5, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Double6, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum4, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum5, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum6, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum7, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum8, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum9, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum10, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum11, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum12, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum13, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum14, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum15, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum16, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Sum17, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two12, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two13, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two14, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two15, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two16, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two23, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two24, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two25, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two26, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two34, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two35, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two36, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two45, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two46, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.Two56, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.One1, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.One2, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.One3, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.One4, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.One5, area: '118,102_118,260_308,260_308,102' },
  // { type: SicBoMarketType.One6, area: '118,102_118,260_308,260_308,102' },
]

export default function SicBoBetAreaView() {
  const view = new Container()
  for (const { type, area } of betAreas) {
    view.addChild(BetAreaView({ area, onClick: () => console.log(type) }))
  }
  return view
}
