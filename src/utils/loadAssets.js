import { Loader } from 'pixi.js'

export default function loadAssets(assetPaths, loader = Loader.shared) {
  const assetKeys = Object.keys(assetPaths)
  assetKeys.forEach(key => loader.add(key, assetPaths[key]))
  return new Promise((resolve, reject) => {
    const errorCbId = loader.onError.add(reject)
    loader.load((loader, resources) => {
      loader.onError.detach(errorCbId)
      resolve(
        assetKeys.reduce((result, key) => {
          result[key] = resources[key].texture
          return result
        }, {})
      )
    })
  })
}
