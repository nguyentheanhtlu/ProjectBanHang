const Color = require('../models/color');

let create = async (req, res, next) => {
    let color_name = req.body.color_name;
    if (color_name === undefined) return res.status(400).send('Trường tên màu không tồn tại');
    let color = await Colour.findOne({ where: { color_name } });
    if (color) return res.status(409).send('Tên màu đã tồn tại');
    else {
        let newColor = await Color.create({ color_name });
        return res.send(newColor);
    }
}

let list = async (req, res, next) => {
    let colors = await Color.findAll({
        attributes: ['color_id', 'color_name'],
        raw: true
    });
    return res.send(colors);
}

module.exports = {
    create,
    list,
};