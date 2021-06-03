module.exports = {
  async redirects() {
    return [
      // https://nextjs.org/docs/api-reference/next.config.js/redirects
      {
        source: "/menu/pizzas",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
};
