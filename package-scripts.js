const path = require('path');

const frameworks = ["angular", "react", "react-ts", "vue", "vue-ts", "jquery", "jquery-standalone"];

function getUpdateAllScript(frameworks) {
  const updater = path.resolve('./node_modules/npm-check-updates/bin/npm-check-updates.js');
  const targets = [
    path.resolve(__dirname),
    ...frameworks.map(fn => path.resolve(`./examples/${fn}-ex`))
  ];
  return targets.map(tgt => `cd ${tgt} && node ${updater} -u`).join(' && ');
}

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
    ),
    'updateAllDependencies': getUpdateAllScript(frameworks),
  }
};
