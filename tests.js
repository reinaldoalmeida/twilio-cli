require("dotenv").config();
const process = require("process");
const assert = require("assert");
const list = require("./src/twilio-sid");

describe("Suite NodeJS Twilio CLI to change Webhook URL", function () {
    it("List SIDs", async () => {
        const success = await list.twilio(
            process.env.accountSid,
            process.env.authToken
        );
        assert.deepStrictEqual(success, true);
    });
});
