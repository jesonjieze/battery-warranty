# 使用官方Node.js运行时作为基础镜像
FROM node:18-alpine
# 在容器内设置工作目录
WORKDIR /usr/src/app
# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./
# 安装项目依赖
RUN npm install --only=production
# 将项目所有源代码复制到工作目录
COPY . .
# 声明容器运行时监听的端口（与您设置的8080一致）
EXPOSE 8080
# 定义容器启动时执行的命令
CMD [ "node", "index.js" ]
