module.exports.twilio = async (accountSid, authToken, phoneNumberSid, URL) => {
    if (!URL) {
        console.log("URL is required");
        return;
    }
    if (!phoneNumberSid) {
        console.log("Phone Number Sid is required");
        return;
    }
    if (!accountSid || !authToken) {
        console.log("Account Sid and Token is required");
        return;
    }

    const client = require("twilio")(accountSid, authToken);

    await client
        .incomingPhoneNumbers(phoneNumberSid)
        .update({
            accountSid: accountSid,
            smsUrl: URL,
            smsFallbackUrl: URL,
        })
        .then((incoming_phone_number) =>
            console.log(
                incoming_phone_number.friendlyName,
                incoming_phone_number.smsUrl,
                incoming_phone_number.status
            )
        )
        .done();
    return true;
};
