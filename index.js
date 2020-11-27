require("dotenv").config();
const process = require("process");

const yargs = require("yargs");
const change = require("./twilio-url");
const list = require("./twilio-sid");

async function main() {
    const argv = yargs
        .command("url", "Which URL should be defined in twilio", {
            url: {
                description: "the url to set",
                alias: "u",
                type: "string",
            },
        })
        .command("sid", "List of Twilio SID numbers", {
            phone: {
                description: "the SID list",
                alias: "s",
                type: "string",
            },
        })
        .option("psid", {
            alias: "p",
            description: "Tell the SID of Phone Number",
            type: "string",
        })
        .help()
        .alias("help", "h").argv;

    const accountSid = process.env.accountSid;
    const authToken = process.env.authToken;

    try {
        if (argv._.includes("sid")) {
            console.log("Listing SIDs ... ");
            list.twilio(accountSid, authToken);
        }
        if (argv._.includes("url")) {
            const [, url] = argv._;
            const { p: sid } = argv;
            console.log("Changing Twilio URL ... ", url);
            change.twilio(accountSid, authToken, sid, url);
        }
    } catch (e) {
        console.log("[ERROR]", e);
    }
}

main();
