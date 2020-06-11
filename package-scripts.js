const frameworks = ["angular", "react", "react-ts", "vue", "vue-ts", "jquery", "jquery-standalone"];

module.exports = {
  scripts: {
    'update': `kuroco pull && kuroco generate -o kuroco -l js --lib && kuroco generate -o kuroco-standalone -l js --standalone`,
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
