export const makeVoteInput = (treeDetails, voteDetails, electionId) => {
  //TODO din json desc sau session

  const trapdoor = '240851136316530925167386207077310034127'
  const privateKey =
    '2861837762454147715322643696618663714968777039364921009144675851788643368478076521608074320953950313316291140613510335691633118135443764669325349791987619099'

  return {
    trapdoor,
    privateKey,
    electionId,
    ...treeDetails,
    ...voteDetails
  }
}
