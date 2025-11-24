
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/masterUpdateMap', async (req, res) => {
    const imageUrl = req.body.image;
    const user = req.body.user;
    
                const response = await fetch(imgUrl, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageUrl: url })
            });
    if (!imageUrl) return res.status(400).send('Falta la URL de la imagen');

    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const filePath = path.join(__dirname, 'public', 'image.jpg');
        fs.writeFileSync(filePath, response.data);
        res.json({ message: 'Imagen descargada', imagePath: '/image.jpg' });
    } catch (error) {
        res.status(500).send('Error al descargar la imagen');
    }
});


app.use(express.static('public'));

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
 