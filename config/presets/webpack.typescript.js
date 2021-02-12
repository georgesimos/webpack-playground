module.exports = (env) => {
  return {
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: ["ts-loader"],
        },
      ],
    },
  };
};
