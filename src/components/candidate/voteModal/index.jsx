import React from 'react'
import { Modal } from 'components/modal'
import { ErrorSection } from 'components/candidate/voteModal/errorSection'
import { SentParameters } from 'components/candidate/voteModal/parametersSection'
import { ReceiptSummary } from 'components/candidate/voteModal/receiptSummary'
import { StatusHeader } from 'components/candidate/voteModal/header'

export const VoteModal = ({ result, closeModal }) => (
  <Modal closeModal={closeModal}>
    <div className={'p-4'}>
      <StatusHeader success={result.success} />

      {result.error && <ErrorSection message={result.error.message || String(result.error)} />}

      {result.sentValues && <SentParameters values={result.sentValues} />}

      {result.receiptSummary && (
        <ReceiptSummary
          transactionHash={result.receiptSummary.transactionHash}
          blockNumber={result.receiptSummary.blockNumber}
          gasUsed={result.receiptSummary.gasUsed}
        />
      )}
    </div>
  </Modal>
)
