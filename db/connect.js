const mongoose = require("mongoose")

const connectDB = (url) => {
    return mongoose.connect(url)
}

module.exports = connectDB

/* o mongoose versão 5 precisa fazer o seguinte comando
return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }) */
