let escapeBody = require("./escapeBody");
let nomeWidget = "mensagem_de_boas_vindas";
let body = `Olá, aqui é o Astro Mix o assistente virtual da MixFarma

Seja muito bem vindo(a) ao atendimento MixFarmateste

Você é:

1- *Cliente*
2- *Fornecedor*
3-  *Vendedor*
`;
let jsonString = `{
 "contact": {
   "messageSid": "{{trigger.message.MessageSid}}",
   "smsStatus": "{{trigger.message.SmsStatus}}",
   "accountSid": "{{trigger.message.AccountSid}}",
   "smsSid": "{{trigger.message.SmsSid}}",
   "profileName": "{{trigger.message.ProfileName}}",
   "from": "{{trigger.message.From}}",
   "to": "{{trigger.message.To}}",
   "body": "{{widgets.${nomeWidget}.inbound.Body}}",
   "dateCreated": "{{widgets.mensagem_separacao.inbound.DateCreated}}"
 },
 "widget": {
 "body": "${escapeBody(body)}",
   "from": "{{widgets.${nomeWidget}.outbound.From}}",
   "to": "{{widgets.${nomeWidget}.outbound.To}}",
   "accountSid": "{{trigger.message.AccountSid}}"
 }
}`;

console.log(jsonString);
