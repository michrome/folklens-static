const fetchUserData = async username => {
  // do some async things
  return username
}

module.exports = async function() {
  const user1 = await fetchUserData('user1')
  const user2 = await fetchUserData('user2')

  return [user1, user2]
}
