export const getFileFromServer = async (file, id = null) => {
  const base = 'http://localhost:8081'
  const params = id != null ? `files/election${id}` : 'files' ///TODO replace with env
  const url = `${base}/${params}/${file}`

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Failed to fetch ABI.json from ${url} [${res.status}]`)
  }

  if (file.endsWith('.wasm') || file.endsWith('.zkey') || file.endsWith('.wtns')) {
    return await res.arrayBuffer()
  } else if (file.endsWith('.json')) {
    return await res.json()
  } else {
    return await res.text()
  }
}
