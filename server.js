const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get('/api/lotto', async (req, res) => {
    const { drwNo } = req.query; // 회차 번호를 쿼리 파라미터로 받음
    try {
        const response = await axios.get(
            `https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${drwNo}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch lotto data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});