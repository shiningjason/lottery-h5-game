import { SicBoMarketType } from '@app/constants/marketTypes'

function getSubViewStyle(w, h, [px, py]) {
  return { x: px, y: py, width: w - px * 2, height: h - py * 2 }
}

export const getTableStyle = (w, h) => getSubViewStyle(w, h, [-60, 10])

export const getLayoutStyle = (w, h) => getSubViewStyle(w, h, [100, 80])

const baseChipBoxStyle = { x: 80, ry: -80, chipSize: 60, chipGap: 12 }
const chipDollars = [1, 2, 5, 10, 20]
const chipCount = chipDollars.length
const chipBoxWidth =
  baseChipBoxStyle.chipSize * chipCount +
  baseChipBoxStyle.chipGap * (chipCount - 1)

export const getChipBoxStyle = (w, h) => ({
  x: baseChipBoxStyle.x,
  y: h + baseChipBoxStyle.ry,
  chipSize: baseChipBoxStyle.chipSize,
  chipGap: baseChipBoxStyle.chipGap,
  chipDollars
})

export const getBetChipStyle = (w, h) => ({
  x: baseChipBoxStyle.x + chipBoxWidth / 2 - baseChipBoxStyle.chipSize / 2,
  y: h + baseChipBoxStyle.ry,
  size: baseChipBoxStyle.chipSize
})

export const betChipPlacingStyle = {
  margin: 80,
  maxSize: baseChipBoxStyle.chipSize,
  minSize: 24
}

export const betAreas = [
  { type: SicBoMarketType.Small, area: '118,102_118,260_308,260_308,102' },
  { type: SicBoMarketType.Big, area: '968,102_968,260_1158,260_1158,102' },
  { type: SicBoMarketType.TripleAny, area: '558,102_558,260_720,260_720,102' },
  { type: SicBoMarketType.Triple1, area: '328,102_328,260_358,260_358,102' },
  { type: SicBoMarketType.Triple2, area: '361,102_361,260_391,260_391,102' },
  { type: SicBoMarketType.Triple3, area: '394,102_394,260_424,260_424,102' },
  { type: SicBoMarketType.Triple4, area: '855,102_855,260_885,260_885,102' },
  { type: SicBoMarketType.Triple5, area: '888,102_888,260_918,260_918,102' },
  { type: SicBoMarketType.Triple6, area: '921,102_921,260_951,260_951,102' },
  { type: SicBoMarketType.Double1, area: '451,102_451,260_481,260_481,102' },
  { type: SicBoMarketType.Double2, area: '483,102_483,260_513,260_513,102' },
  { type: SicBoMarketType.Double3, area: '515,102_515,260_545,260_545,102' },
  { type: SicBoMarketType.Double4, area: '735,102_735,260_765,260_765,102' },
  { type: SicBoMarketType.Double5, area: '767,102_767,260_797,260_797,102' },
  { type: SicBoMarketType.Double6, area: '799,102_799,260_829,260_829,102' },
  { type: SicBoMarketType.Sum4, area: '118,260_118,354_197,354_197,260' },
  { type: SicBoMarketType.Sum5, area: '197,260_197,354_274,354_274,260' },
  { type: SicBoMarketType.Sum6, area: '274,260_274,354_350,354_350,260' },
  { type: SicBoMarketType.Sum7, area: '350,260_350,354_420,354_420,260' },
  { type: SicBoMarketType.Sum8, area: '420,260_420,354_492,354_492,260' },
  { type: SicBoMarketType.Sum9, area: '492,260_492,354_565,354_565,260' },
  { type: SicBoMarketType.Sum10, area: '565,260_565,354_644,354_644,260' },
  { type: SicBoMarketType.Sum11, area: '644,260_644,354_715,354_715,260' },
  { type: SicBoMarketType.Sum12, area: '715,260_715,354_788,354_788,260' },
  { type: SicBoMarketType.Sum13, area: '788,260_788,354_860,354_860,260' },
  { type: SicBoMarketType.Sum14, area: '860,260_860,354_935,354_935,260' },
  { type: SicBoMarketType.Sum15, area: '935,260_935,354_1010,354_1010,260' },
  { type: SicBoMarketType.Sum16, area: '1010,260_1010,354_1081,354_1081,260' },
  { type: SicBoMarketType.Sum17, area: '1081,260_1081,354_1160,354_1160,260' },
  { type: SicBoMarketType.Two13, area: '206,354_206,496_276,496_276,354' },
  { type: SicBoMarketType.Two14, area: '276,354_276,496_340,496_340,354' },
  { type: SicBoMarketType.Two15, area: '340,354_340,496_402,496_402,354' },
  { type: SicBoMarketType.Two12, area: '402,354_402,496_466,496_466,354' },
  { type: SicBoMarketType.Two16, area: '466,354_466,496_528,496_528,354' },
  { type: SicBoMarketType.Two23, area: '528,354_528,496_590,496_590,354' },
  { type: SicBoMarketType.Two24, area: '590,354_590,496_652,496_652,354' },
  { type: SicBoMarketType.Two25, area: '652,354_652,496_717,496_717,354' },
  { type: SicBoMarketType.Two26, area: '717,354_717,496_780,496_780,354' },
  { type: SicBoMarketType.Two34, area: '780,354_780,496_842,496_842,354' },
  { type: SicBoMarketType.Two35, area: '842,354_842,496_904,496_904,354' },
  { type: SicBoMarketType.Two36, area: '904,354_904,496_968,496_968,354' },
  { type: SicBoMarketType.Two45, area: '968,354_968,496_1030,496_1030,354' },
  { type: SicBoMarketType.Two46, area: '1030,354_1030,496_1093,496_1093,354' },
  { type: SicBoMarketType.Two56, area: '1093,354_1093,496_1160,496_1160,354' },
  { type: SicBoMarketType.One1, area: '118,496_118,564_291,564_291,496' },
  { type: SicBoMarketType.One2, area: '291,496_291,564_466,564_466,496' },
  { type: SicBoMarketType.One3, area: '466,496_466,564_640,564_640,496' },
  { type: SicBoMarketType.One4, area: '640,496_640,564_812,564_812,496' },
  { type: SicBoMarketType.One5, area: '812,496_812,564_992,564_992,496' },
  { type: SicBoMarketType.One6, area: '992,496_992,564_1160,564_1160,496' }
].map(({ type, area }) => ({
  type,
  vertices: area.split('_').map(xy => xy.split(',').map(n => +n))
}))
