
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {

    await this.client.wait(1000);

    this.client.appInfo = await this.client.fetchApplication();
    setInterval( async () => {
      this.client.appInfo = await this.client.fetchApplication();
    }, 60000);

    // If default settings aren't set, it won't continue and send an error:
    if (!this.client.settings.has("default")) {
      if (!this.client.config.defaultSettings) throw new Error("defaultSettings not preset in config.js or settings database. Bot cannot load.");
      this.client.settings.set("default", this.client.config.defaultSettings);
    } // If they're set though, continue:

    this.client.user.setStatus("dnd"); // Goes on dnd shortly for letting everyone know it boots up
    await this.client.wait(5000); // = 5 seconds in miliseconds

    this.client.user.setStatus("online"); // Then, after 5 seconds, sets the status back to online

    // Activity List
    // You can add more to it in activities.json!
    this.client.user.setActivity('/help - Sync');
    this.client.logger.log(`Ready and logged in as ${this.client.user.tag}`, "ready");
  }
};

