export default () =>
  ({
    port: parseInt(process.env.PORT, 10) || 8080,
    database: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      name: process.env.POSTGRES_DATABASE,
    },
  } as const)
