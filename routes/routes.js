const templates = require('../template_helper.js')

module.exports.get = async function(rota){

	let content = await templates.getpart('headr.html')

 	content += await templates.getpart(rota+'.html')

 	content += await templates.getpart('footer.html')

	return content

}