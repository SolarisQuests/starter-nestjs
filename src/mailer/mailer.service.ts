import { Injectable } from '@nestjs/common';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { UpdateMailerDto } from './dto/update-mailer.dto';
import { google } from 'googleapis';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: Transporter;
  private oauth2Client;

  constructor() {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      "27300239856-2j4519iqluqogofs0obmg46b6up8tdor.apps.googleusercontent.com",
      "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",
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: "1//04izlGrK5u_jDCgYIARAAGAQSNwF-L9Ird478dV83yYBAhpDIml66EMVdrMFnkmpJXtpvF5N0OxJHKQikdTic-_9dsGJn3yKlTyI",
    });

    this.transporter =createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'audiologyplustech@gmail.com',
        clientId: '27300239856-2j4519iqluqogofs0obmg46b6up8tdor.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04izlGrK5u_jDCgYIARAAGAQSNwF-L9Ird478dV83yYBAhpDIml66EMVdrMFnkmpJXtpvF5N0OxJHKQikdTic-_9dsGJn3yKlTyI',
      }as any,
    });
    this.refreshAccessToken();
  }

  private async refreshAccessToken() {
    try {
      const { token } = await this.oauth2Client.getAccessToken();
      this.transporter.set('oauth2_provision_cb', (user, renewToken, callback) => {
        callback(null, token);
      });
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
  }

  async sendEmail(createMailerDto:CreateMailerDto) {
  try {
    const mailOptions = {
      from: 'audiologyplustech@gmail.com', // sender address
      to:createMailerDto.to, // list of receivers
      subject:createMailerDto.subject, // Subject line
      cc: 'audiologyplustech@gmail.com', // Add CC recipients here
      bcc: 'audiologyplustech@gmail.com',
      html:createMailerDto.text,
      attachments: [
        {
          path: createMailerDto.content,
          cid: 'unique@nodemailer.com'
        },
        {
          fileName:createMailerDto.fileName,
          path:createMailerDto.pdf,
        },
      ],
    };
    await this.transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }


    // console.log('Message sent: %s', info.messageId);
  }
  create(createMailerDto: CreateMailerDto) {

    return 'This action adds a new mailer';
  }

  findAll() {
    return `This action returns all mailer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailer`;
  }

  update(id: number, updateMailerDto: UpdateMailerDto) {
    return `This action updates a #${id} mailer`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailer`;
  }
}
