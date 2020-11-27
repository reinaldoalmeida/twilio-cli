module.exports.twilio = async (accountSid, authToken) => {
    if (!accountSid || !authToken) {
        console.log("Account Sid and Token is required");
        return;
    }
    const client = require("twilio")(accountSid, authToken);
    await client.incomingPhoneNumbers
        .list({ limit: 20 })
        .then((incomingPhoneNumbers) =>
            incomingPhoneNumbers.forEach((i) =>
                console.log(`[${i.friendlyName}][${i.sid}]`)
            )
        );
    return true;
};
