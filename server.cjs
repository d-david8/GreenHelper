// server.cjs
(async () => {
  // Importă aplicația Express (ESM)
  const { default: app } = await import("./src/app.js");
  const { SERVER_PORT } = await import("./src/config/server.config.js");

  // Pornește serverul
  app.listen(SERVER_PORT || 3000, () => {
    console.log(`🚀 GreenHelper running on port ${SERVER_PORT || 3000}`);
  });
})();
