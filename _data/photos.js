const contentful = require('contentful')
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

module.exports = async function() {
  let photoImageURLs = []
  await client
    .getEntries({
      content_type: 'photo',
      order: '-fields.timeTaken',
      limit: 25
    })
    .then(response => {
      const photos = response.items
      const photosWithPublishedImage = photos.filter(
        item =>
          item.fields.image &&
          item.fields.image.fields &&
          item.fields.image.fields.file &&
          item.fields.image.fields.file.url
      )
      photoImageURLs = photosWithPublishedImage.map(item => item.fields.image.fields.file.url)
      return photoImageURLs
    })
    .catch(console.error)
  return photoImageURLs
}
