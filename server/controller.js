const homes = require('./db.json')
const upcomingId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(homes)
    },

    deleteHouse: (req, res) => {
        let index = homes.findIndex(item => item.id === req.params.id)
        homes.splice(index, 1)
        res.status(200).send(homes)
    },

    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: upcomingId,
            address,
            price,
            imageURL
        }
        homes.push(newHouse)
        res.status(200).send(homes)
        upcomingId++
    },

    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = homes.findIndex(item => item.id === id)
    }
}