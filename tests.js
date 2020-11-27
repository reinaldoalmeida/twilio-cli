require("dotenv").config();
const process = require("process");
const assert = require("assert");
const sid = require("./twilio-sid.js");

describe("Suite NodeJS Twilio CLI to change Webhook URL", function () {
    it("List SIDs", async () => {
        const success = await sid.twilio(
            process.env.accountSid,
            process.env.authToken
        );
        assert.deepStrictEqual(success, true);
    });
});
