export const makeProgress = (startTimestamp, endTimestamp) => {
  const now = Date.now()
  const rawProgress = (now - startTimestamp) / (endTimestamp - startTimestamp)

  return Math.max(0, Math.min(1, rawProgress))
}
