import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { isFileDownloadedWith } from "./cypress/utils/fileUtil";
import { queryTestDb } from "./cypress/utils/dbUtil";

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      on('task', {
        canSum(array) {
          return 4
        },
        isFileDownloadedWith(text, ms = 4000) {
          return isFileDownloadedWith(text, ms)
        },
        runDBQuery(query) {
          return queryTestDb(query)
        }
      });
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
