export default {
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        login: "./src/login.html",
        home: "./src/home.html",
        perfil: "./src/perfil.html",
      },
    },
  },
};
