const title = "abi.lol";
const description = `View Smart Contract ABIs as Readable Documentation.`;
const url = `https://abi.lol/`;

const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [
    //   {
    //     url: ``,
    //     alt: title,
    //     width: 960,
    //     height: 960,
    //   },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@0xJudith",
    site: "@0xJudith",
  },
  additionalLinkTags: [{ rel: "icon", href: "/favicon.ico" }],
};

export default SEO;
