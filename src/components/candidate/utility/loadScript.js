export const loadScript = jsText => {
  const blob = new Blob([jsText], { type: 'text/javascript' })
  const url = URL.createObjectURL(blob)
  const script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}
