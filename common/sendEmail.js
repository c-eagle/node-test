import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'

const emailConfig = {
    service: 'QQ',
    user: '1378151264@qq.com',
    pass: 'sbofmuvwazbegedh'
}

// 配置
const transport = nodemailer.createTransport(smtpTransport({
    service: emailConfig.service,
    auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
    }
}))

/**
 * 发送邮件
 * @param to 需要发送的邮件地址
 * @param subject 主题
 * @param html 内容
 */
const sendEmail = (to, subject, html) => {
    transport.sendMail({
        from: emailConfig.user,
        to,
        subject,
        html
    }, error => {
        error ? console.log(error) : console.log('发送成功')
    })
}

export default sendEmail
