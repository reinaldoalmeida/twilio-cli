# node-twilio

Twilo CLI to change [WhatsApp](https://www.twilio.com/console/sms/whatsapp/senders) Webhook URL for incoming messages.

This nodeJS code works on command line.

## Get Started

To manually change the webhook for a Twilio phone number, you need to access [painel](https://www.twilio.com/console/sms/whatsapp/senders), and then click -> Edit Sender

To change a webhook from a number on twilio, with this code, you need to pass your credentials (Account SID and Account Token) and the identification string (SID) of the phone number you want to change the url.

Credentials must be written in the project's .env file.

## Commands

This code accepts the following commands:

| Command | Description                                          |
| ------- | ---------------------------------------------------- |
| sid     | list all of phone number sid codes on Twilio account |
| url     | change the webhook url on Twilio                     |

## List Twilio Phone Numbers SIDs

```bash
node index.js sid
```

## Change Webhook URL

```bash
node index.js url https://{your url here} -p {SID phone number}
```
