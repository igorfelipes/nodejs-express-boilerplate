// import * as aws from "@aws-sdk/client-ses";
// import nodemailer from 'nodemailer';
// import { getMailFrom } from "../../common/env";
// import { SendEmail, SendEmailType } from "../../domain/usecases/mailProvider";

// export class NodemailerMailProvider implements SendEmail {

//   constructor(private readonly sesClient: aws.SES){}

//   private transporter = nodemailer.createTransport({
//     SES: {
//       ses: this.sesClient,
//       aws
//     }
//   });

//   send(data: SendEmailType): boolean {
//     this.transporter
//       .sendMail({
//         from: getMailFrom(),
//         to: data.to,
//         subject: data.subject,
//         text: data.text,
//         html: data.html,
//       })
//       .then((message) => {
//         console.log(message);
//       })
//       .catch((err) => {
//         console.log(err);
//         return false;
//       });

//     return true;
//   }
// }
