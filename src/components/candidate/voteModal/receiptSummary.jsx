import React from 'react'

export const ReceiptSummary = ({ transactionHash, blockNumber, gasUsed }) => (
  <div className={'mt-6 overflow-x-hidden'}>
    <h3 className={'text-lg font-semibold text-neutral-50'}>Receipt</h3>
    <ul className={'list-disc list-inside text-sm text-light-sky-blue mt-2 break-words'}>
      <li>
        <span className={'font-medium text-neutral-50'}>Transaction Hash:</span> {transactionHash}
      </li>
      <li>
        <span className={'font-medium text-neutral-50'}>Block Number:</span> {blockNumber}
      </li>
      <li>
        <span className={'font-medium text-neutral-50'}>Gas Used:</span> {gasUsed}
      </li>
    </ul>
  </div>
)
