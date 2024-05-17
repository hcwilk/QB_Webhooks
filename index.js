
import './init-env.js'

export const handleWebhook = async (req, res) => {
    console.log('Received webhook:', req.method, req.url)
    if (req.method === 'GET') {
        console.log('Just a GET request')
        res.send('It is alive!')
        return
    }

    const { body } = req

    console.log('Received webhook:', body)
}