exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: 'babel-plugin-tailwind' });
  setBabelPlugin({ name: 'babel-plugin-emotion' });
};
