const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

// 最简单的健康检查接口（必须要有）
app.get('/', (req, res) => {
  res.json({ 
    status: 'success', 
    message: '电池质保卡API服务运行正常',
    timestamp: new Date().toISOString()
  });
});

// 您的产品查询接口（模拟数据）
app.get('/api/product', (req, res) => {
  const { sn } = req.query;
  
  // 模拟数据库查询，返回固定结构
  const productData = {
    code: 0,
    data: {
      productName: "锂离子电池组（模拟数据）",
      productModel: "60V60型",
      brand: "杰泽",
      manufacturer: "杰泽能源",
      productionDate: "2025-01-01",
      factoryNo: sn || "未提供SN码",
      customerName: "测试客户",
      customerPhone: "13800138000",
      installer: "杰泽能源",
      startDate: "2025-01-02",
      warrantyExpiry: "2028-01-01",
      warrantyStatus: "active",
      warrantyStatusText: "已激活"
    },
    msg: "success"
  };
  
  // 添加1秒延迟模拟网络请求
  setTimeout(() => {
    res.json(productData);
  }, 1000);
});

// 启动服务器
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ 服务器启动成功！`);
  console.log(`📡 监听端口: ${PORT}`);
  console.log(`🌐 内网地址: http://localhost:${PORT}`);
  console.log(`📱 API示例: http://localhost:${PORT}/api/product?sn=102500000013`);
});
