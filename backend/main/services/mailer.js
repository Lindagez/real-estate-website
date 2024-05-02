const nodemailer = require('nodemailer');

const { addisHiwotMail, addisHiwotMailPassword, addisHiwotClient, addisHiwotClientPassword, addisHiwotServiceNoreply, addisHiwotServiceNoreplyPassword } = require('../config');

const clientInterestFormAutoReply = async (formData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: `${addisHiwotServiceNoreply}`,
        pass: `${addisHiwotServiceNoreplyPassword}`
      }
    });

    const mailOptions = {
      from: `${addisHiwotServiceNoreply}`,
      to: formData.email, // Recipient's email
      subject: 'Thank you for your interest',
      text: `Our agents will contact you shortly!`
    };
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    return { error: true };
  }
}

const clientMessageFormAutoReply = async (formData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: `${addisHiwotServiceNoreply}`,
        pass: `${addisHiwotServiceNoreplyPassword}`
      }
    });

    const mailOptions = {
      from: `${addisHiwotServiceNoreply}`,
      to: formData.email, // Recipient's email
      subject: 'Thanks you for contacting us!',
      text: `Dear ${formData.name}\nThanks you for contacting us. We will reply for your message soon!`
    };
    return await transporter.sendMail(mailOptions);
  } catch (error) {
    return { error: true };
  }
}

exports.interestFormService = async (formData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: `${addisHiwotClient}`,
        pass: `${addisHiwotClientPassword}`
      }
    });
    const mailOptions = {
      from: `${addisHiwotClient}`,
      to: `${addisHiwotMail}`, // Recipient's email
      subject: 'Real Estate Buying Request',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    };
    const clientRequestResponse = await transporter.sendMail(mailOptions);

    if (clientRequestResponse.error) {
      return { status: 400, error: true, message: "Something went wrong! Try later." };
    }
    const status = clientRequestResponse.response.split(" ");
    if (status[0] === '250') {
      return clientInterestFormAutoReply(formData)
        .then(autoReplyResponse => {
          if (autoReplyResponse !== undefined) {
            if (autoReplyResponse.error) {
              return { status: 400, error: true, message: "Something went wrong!" };
            }
            const replyStatus = autoReplyResponse.response.split(" ");
            if (replyStatus[0] === '250') {
              return { status: 200, success: true, message: "Message sent successfully" };
            } else {
              return { status: 400, error: true, message: "Something went wrong! Try later." };
            }
          }
        })
    } else {
      return { status: 400, error: true, message: "Something went wrong! Try later." };
    }

  } catch (error) {
    return { error: true };
  }
}

exports.messageFormService = async (formData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: `${addisHiwotClient}`,
        pass: `${addisHiwotClientPassword}`
      }
    });
    const mailOptions = {
      from: `${addisHiwotClient}`,
      to: `${addisHiwotMail}`, // Recipient's email
      subject: 'Incoming Client Message',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };
    const clientRequestResponse = await transporter.sendMail(mailOptions);

    if (clientRequestResponse.error) {
      return { status: 400, error: true, message: "Failed to sent message!" };
    }
    // const status = clientRequestResponse.response.split(" ");
    const status = clientRequestResponse.response.split(" ");

    if (status && status[0] === '250') {
      return clientMessageFormAutoReply(formData)
        .then(autoReplyResponse => {
          if (autoReplyResponse !== undefined) {
            if (autoReplyResponse.error) {
              return { status: 400, error: true, message: "Auto reply failed!" };
            }
            const replyStatus = autoReplyResponse.response.split(" ");
            if (replyStatus[0] === '250') {
              return { status: 200, success: true, message: "Message sent successfully" };
            } else {
              return { status: 400, error: true, message: "Send failed!" };
            }
          }
        })
    } else {
      return { status: 400, error: true, message: "Try later." };
    }

  } catch (error) {
    return { error: true, status: 400, message: 'Something went wrong' };
  }
}
