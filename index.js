// index.js - 电池质保卡API服务入口文件
const express = require('express');
const app = express();
const PORT = process.env.PORT || 80; // 使用云托管分配的端口

// 基础中间件
app.use(express.json());

// 1. 健康检查路由 (云托管监测必需)
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: '电池质保卡API服务运行中',
    service: 'battery-warranty-api'
  });
});

// 2. 您的产品查询API路由 (示例)
app.get('/api/product', (req, res) => {
  // 从请求参数中获取产品序列号
  const { sn } = req.query;
  
  // 这里应该连接数据库进行真实查询
  // 以下是返回模拟数据供测试
  res.json({
    code: 0,
    data: {
      productName: "锂离子电池组",
      productModel: "60V60型",
      brand: "杰泽",
      factoryNo: sn || "未提供",
      warrantyStatus: "active",
      productionDate: "2025-01-01"
    },
    msg: "success"
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`✅ 服务器启动成功，正在监听端口: ${PORT}`);
  console.log(`➡️  本地访问: http://localhost:${PORT}`);
  console.log(`➡️  产品查询示例: http://localhost:${PORT}/api/product?sn=102500000013`);
});
