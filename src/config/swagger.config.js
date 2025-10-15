import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GreenHelper API",
      version: "1.0.0",
      description: "API documentation for GreenHelper project",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Local server",
      },
      {
        url: "http://localhost:3000/api/v2",
        description: "Local server",
      },
      {
        url: "https://greenhelper.davidan.website/api/v1",
        description: "Production server",
      },
      {
        url: "https://greenhelper.davidan.website/api/v2",
        description: "Production server",
      },
    ],
  },

  apis: ["./src/modules/**/v1/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
