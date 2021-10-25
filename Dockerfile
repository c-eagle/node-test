FROM node
MAINTAINER laoying <1378151264@qq.com>

# 容器时间同步
ENV TZ=PRC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 创建项目目录
RUN mkdir -p /home/node-test
WORKDIR /home/node-test

# 复制文件
COPY . /home/node-test
RUN npm install

EXPOSE 4000
CMD [ "npm", "start" ]
