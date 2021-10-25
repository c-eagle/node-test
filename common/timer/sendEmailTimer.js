import schedule from 'node-schedule';
import sendEmail from '../sendEmail.js';

const sendEmailTimer = ()=>{
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('30 * * * * *',()=>{
        sendEmail('542968439@qq.com', '测试定时任务', `<span style="color: red">测试第三十秒发送定时任务：${new Date()}</span>`)
    });
}

sendEmailTimer()
