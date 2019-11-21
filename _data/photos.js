const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

module.exports = async function () {
  let photos = []
  await client
    .getEntries({
      content_type: 'photo',
      order: '-fields.timeTaken'
    })
    .then(response => {
      const items = response.items
      console.log(items)
      photos = items.map(item => item.fields.image.fields.file.url)
      return photos
    })
    .catch(console.error)
  return photos
}
