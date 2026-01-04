# 使用官方 Node.js 镜像作为基础镜像
FROM node:18-alpine

# 在容器内设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装应用依赖（生产环境）
RUN npm install --only=production

# 如果您的项目有全局依赖，可能需要以下命令
# RUN npm install -g pm2  # 如果需要pm2进程管理

# 复制应用源代码
COPY . .

# 暴露端口（必须与云托管设置的"容器端口"一致，您截图显示是80）
EXPOSE 80

# 定义容器启动命令
CMD ["node", "index.js"]
