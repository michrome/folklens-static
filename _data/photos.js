const contentful = require('contentful')
const client = contentful.createClient({
  //   // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  //   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

// async function fetchUserData(username) {
//     // do some async things
//     return username;
//   }

//   module.exports = async function() {
//     // let user1 = await fetchUserData("user1");
//     // let user2 = await fetchUserData("user2");

//     // return [user1, user2];
//     // let mike = client.getEntry("3D11ZBpQwNnZ6uHPx1yiHP");
//     // console.log(mike);
//     return await client.getEntry("3D11ZBpQwNnZ6uHPx1yiHP");
//   };

async function fetchContentData(username) {
  // do some async things
  let monkey = await client.getEntry('6GciVEYNmFoAeAwRPoXAeq')
  //let monkey = await client.getEntries({include: 3, 'sys.id': '3D11ZBpQwNnZ6uHPx1yiHP'});
  console.log(JSON.stringify(monkey))
  return monkey
}

async function fetchUserData(username) {
  // do some async things
  return username
}

module.exports = async function() {
  let user1 = await fetchUserData('user1')
  let user2 = await fetchContentData('user2')

  // return [user1, user2];
  return user2
}
