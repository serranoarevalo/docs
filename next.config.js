// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")();
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});