import crypto from 'crypto'
const circomlibEncrypt = require('circomlibjs')

export const encryptVote = async (input, pk) => {
  const babyjub = await circomlibEncrypt.buildBabyjub()
  const { F, Base8: G, subOrder } = babyjub

  const { vote, nonce, Commit, N } = input

  if (
    typeof vote === 'undefined' ||
    typeof nonce === 'undefined' ||
    typeof Commit === 'undefined' ||
    typeof N === 'undefined'
  ) {
    console.error('input.json missing vote, nonce, Commit or N')
    process.exit(1)
  }

  const pubKey = [F.e(BigInt(pk.x)), F.e(BigInt(pk.y))]

  if (!babyjub.inCurve(pubKey)) {
    console.error('Invalid public key point')
    process.exit(1)
  }

  const randFr = () => {
    let r

    do {
      const raw = crypto.randomBytes(32)
      r = BigInt('0x' + raw.toString('hex')) % subOrder
    } while (r === 0n)

    return r
  }

  const nonceBI = BigInt(nonce)

  if (nonceBI < 0n || nonceBI >= subOrder) {
    console.error('Nonce must be in [0..subOrder-1]')
    process.exit(1)
  }

  const r = randFr()
  const C1 = babyjub.mulPointEscalar(G, r)
  const ss = babyjub.mulPointEscalar(pubKey, r)

  let rawX2 = BigInt(F.toObject(ss[0]))
  const P = BigInt(F.p)
  if (rawX2 < 0n) rawX2 += P
  const ssSc2 = rawX2 % subOrder

  const C2 = (nonceBI + ssSc2) % subOrder

  const C1dec = C1.map(coord => F.toObject(coord).toString())

  const encryptedNonce = {
    C1: C1dec,
    C2: C2.toString(),
    Commit,
    N
  }

  console.log('encrypted nonce:', encryptedNonce)

  return encryptedNonce
}
