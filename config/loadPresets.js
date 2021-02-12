const webpackMerge = require("webpack-merge");

module.exports = (env) => {
  console.log(env);
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  console.log(mergedPresets);
  const mergedConfigs = mergedPresets.map(
    (presetName) => require(`./presets/webpack.${presetName}`)(env) // call the preset and pass env also
  );

  return webpackMerge({}, ...mergedConfigs);
};
