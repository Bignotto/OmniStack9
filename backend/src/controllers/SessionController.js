const User = require('../models/User');

//metodos do controller
//index show store destroy

module.exports = {
    async store(req,res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
            console.log('SessionController:10 > reabrindo sessão: ' + email);
        } else {
            console.log('SessionController:10 > sessão criada: ' + email);
        }

        return res.json(user);
    }
};