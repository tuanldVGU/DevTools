const initialState = {
  isAuthenticated: false,
  activeUser: "tuanld",
  activeProject: "Hello_World",
  Testplans: [
    {
      id: "tp_01",
      name: "testplan_01",
      feature: "Sprint 1",
      author: "tuanld",
      desc: "This is a demo test plans.",
      testcases: [
        {
          id: "tc_01",
          name: "testcase_01"
        }
      ]
    }
  ],
  Testsets: [
    {
      id: "ts_01",
      name: "testset_d3m0_1",
      feature: "Login",
      author: "tuanld",
      desc: "This is a demo test set.",
      testcases: [
        {
          id: "tc_01",
          name: "testcase_01"
        }
      ]
    },
    {
      id: "ts_02",
      name: "testset_d3m0_2",
      feature: "Homepage",
      author: "tuanld",
      desc: "This is a demo test set.",
      testcases: [
        {
          id: "tc_02",
          name: "testcase_02"
        }
      ]
    },
  ],
  Testcases: [
    {
      id: "tc_01",
      name: "testcase_01",
      feature: "Login",
      author: "tuanld",
      desc: "This is a demo test case.",
      steps: [
        {
          id: "tcs_01",
          name: "testcase_01"
        }
      ]
    }
  ],
  Testtemps: [
    {
      id: "tt_01",
      name: "template_01",
      feature: null,
      author: "tuanld",
      desc: "This is a demo test case.",
      steps: [
        {
          id: "tcs_01",
          name: "testcase_01"
        }
      ]
    }
  ],
  projects: [
    {
      id: "p_01",
      name: "Hello world",
      startDate: null,
      endDate: null
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CER_LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        activeUser: action.value
      };
    case 'CER_LOGOUT':
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export default reducer;