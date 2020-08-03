// Exporting content via contentful-export 
require('dotenv').config()
const contentfulExport = require('contentful-export')

const options = ({
    spaceId: process.env.CTF_SPACE_ID,
    managementToken: process.env.CTF_MANAGEMENT_TOKEN,
    contentFile: 'contentful-export-content/content.json',
    contentOnly: true,
    // queryEntries: [
    //     'content_type=articlePage'
    // ]
})

contentfulExport(options)
    .then(() => {
        console.log('Content exported')
    })
    .catch((err) => {
        console.log('Error exporting content', err)
    })

