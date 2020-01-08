const frameworks = ["angular", "react", "react-ts", "vue", "vue-ts", "jquery"];

module.exports = {
  scripts: {
    ...frameworks.reduce(
      (prev, cur) => ({
        ...prev,
        [cur]: ["cd examples", `cd ${cur}-ex`, "npm install", "npm start"].join(
          " && "
        )
      }),
      {}
    )
  }
};
