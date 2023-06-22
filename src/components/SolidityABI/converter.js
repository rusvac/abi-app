const reduceObject = (e) => {
  let code = ``;

  const { type, stateMutability } = e;

  return code;
};

const converter = ({ json }) => {
  let code = "";

  console.log(json);

  code = json.map((e) => reduceObject(e)).join(`
`);

  code = `// auto-generated code 

${code}
`;

  return code;
};

export default converter;
