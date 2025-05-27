export const makeVoteInput = (treeDetails, voteDetails, electionId, commitment) => {
  const { trapdoor, signature } = commitment

  return {
    trapdoor,
    privateKey: signature,
    electionId,
    ...treeDetails,
    ...voteDetails
  }
}
