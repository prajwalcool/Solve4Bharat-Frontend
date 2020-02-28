module.exports = {
    client: {
      service: "my-graphql-app",
      url: 'http://localhost:8000/graphql',
      includes: ["./src/**/*.js"],
      excludes: ["**/__tests__/**"]
    }
  }