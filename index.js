
import './init-env.js'

export const handleWeb = async (req, res) => {
    if (req.method === 'GET') {
        console.log('Just a GET request')
        res.send('It is alive!')
        return
    }
}