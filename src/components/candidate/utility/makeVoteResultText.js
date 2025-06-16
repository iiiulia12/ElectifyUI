export function makeVoteResultText(result) {
  if (!result) return 'No result received.'

  const lines = []

  if (result.success) {
    lines.push('Vote submitted successfully!\n')
  } else {
    lines.push('Vote submission failed.\n')
  }

  if (result.sentValues) {
    lines.push('Sent Parameters:')

    for (const [key, value] of Object.entries(result.sentValues || {})) {
      lines.push(`- ${key}: ${JSON.stringify(value)}`)
    }
  }

  if (result.receiptSummary) {
    lines.push('\n Receipt:')
    lines.push(`- Transaction Hash: ${result.receiptSummary.transactionHash}`)
    lines.push(`- Block Number: ${result.receiptSummary.blockNumber}`)
    lines.push(`- Gas Used: ${result.receiptSummary.gasUsed}`)
  }

  if (result.error) {
    lines.push('\n Error:')
    lines.push(result.error.message || String(result.error))
  }

  return lines.join('\n')
}
