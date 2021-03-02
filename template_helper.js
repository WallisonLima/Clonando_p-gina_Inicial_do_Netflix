const fs = require('fs')
const pcurrent = __dirname;

module.exports.getpart = function(file){

    let k = fs.readFileSync(pcurrent+'/templates/'+file, 'utf8')
    
    return k
}