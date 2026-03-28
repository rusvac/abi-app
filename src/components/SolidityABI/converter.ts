import { ABIFunction } from "@/lib/types";

const reduceObject = (e: ABIFunction): string => {
  const code = ``;
  const { type, stateMutability } = e;
  return code;
};

const converter = ({ json }: { json: ABIFunction[] }): string => {
  let code = json.map((e) => reduceObject(e)).join(`
`);

  code = `// auto-generated code

${code}
`;

  return code;
};

export default converter;
