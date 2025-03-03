export const abi = () => [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'electionId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'voter',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'candidateId',
        type: 'bytes32'
      }
    ],
    name: 'Voted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'electionId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'voter',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'caller',
        type: 'address'
      }
    ],
    name: 'VoterAccredited',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'electionId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'voterAddress',
        type: 'address'
      }
    ],
    name: 'accreditVoter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'title',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'endDate',
        type: 'uint256'
      }
    ],
    name: 'createElection',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'electionCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'elections',
    outputs: [
      {
        internalType: 'string',
        name: 'title',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'endDate',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'electionId',
        type: 'uint256'
      }
    ],
    name: 'getCandidates',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]'
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'electionId',
        type: 'uint256'
      }
    ],
    name: 'getElectionDetails',
    outputs: [
      {
        internalType: 'string',
        name: 'title',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'endDate',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'candidateCount',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'electionId',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: 'voterAddress',
        type: 'address'
      }
    ],
    name: 'hasUserVoted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'electionId',
        type: 'uint256'
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string'
      }
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'voters',
    outputs: [
      {
        internalType: 'bool',
        name: 'isRegistered',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: 'hasVoted',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]
