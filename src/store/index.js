import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "The Rejohn",
    slug: "the-rejohn",
    status: "draft",
    image:
      "https://i.picsum.photos/id/260/200/200.jpg?hmac=Nu9V4Ixqq3HiFhfkcsL5mNRZAZyEHG2jotmiiMRdxGA",
    description: "sdfa dadfjadf fajsdflaksd fajdfakdlf ffjadsfjkasdf",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_at: "2021-12-20 18:00:00",
    question: [
      {
        id: 1,
        type: "select",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "radio",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "The Rejohn",
    slug: "the-rejohn",
    status: "draft",
    image:
      "https://i.picsum.photos/id/260/200/200.jpg?hmac=Nu9V4Ixqq3HiFhfkcsL5mNRZAZyEHG2jotmiiMRdxGA",
    description: "sdfa dadfjadf fajsdflaksd fajdfakdlf ffjadsfjkasdf",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_at: "2021-12-20 18:00:00",
    question: [
      {
        id: 1,
        type: "select",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "radio",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 300,
    title: "The Rejohn",
    slug: "the-rejohn",
    status: "draft",
    image:
      "https://i.picsum.photos/id/260/200/200.jpg?hmac=Nu9V4Ixqq3HiFhfkcsL5mNRZAZyEHG2jotmiiMRdxGA",
    description: "sdfa dadfjadf fajsdflaksd fajdfakdlf ffjadsfjkasdf",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_at: "2021-12-20 18:00:00",
    question: [
      {
        id: 1,
        type: "select",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "radio",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
    ],
  },
  {
    id: 400,
    title: "The Rejohn",
    slug: "the-rejohn",
    status: "draft",
    image:
      "https://i.picsum.photos/id/260/200/200.jpg?hmac=Nu9V4Ixqq3HiFhfkcsL5mNRZAZyEHG2jotmiiMRdxGA",
    description: "sdfa dadfjadf fajsdflaksd fajdfakdlf ffjadsfjkasdf",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_at: "2021-12-20 18:00:00",
    question: [
      {
        id: 1,
        type: "select",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "radio",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 1,
        type: "checkbox",
        question: "From wich country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "f8af96",
              text: "USA",
            },
            {
              uuid: "f8af97",
              text: "Georgia",
            },
            {
              uuid: "f8af98",
              text: "Germany",
            },
            {
              uuid: "f8af96",
              text: "Bangladesh",
            },
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
      {
        id: 7,
        type: "textarea",
        question: "What's your favourite youtueb channel",
        description: null,
        data: {},
      },
    ],
  },
];

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      console.log("here");
      return axiosClient.post("/logout").then((response) => {
        commit("logout");
        return response;
      });
    },
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
