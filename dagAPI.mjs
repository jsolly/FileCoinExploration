// /* globals ipfs, all, toBuffer */

// const run = async () => {
//     let cid = await ipfs.dag.put({ test:1 })
//     return cid
//   }
  
//   return run
  
import * as IPFS from 'ipfs-core'

const ipfs = await IPFS.create()
const { cid } = await ipfs.add('Hello world')
console.info(cid)