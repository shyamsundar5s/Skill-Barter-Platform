function matchUsers(user, allUsers) {
  return allUsers.filter((otherUser) => {
    const offers = otherUser.skillsOffered.some((skill) =>
      user.skillsWanted.includes(skill)
    );
    const wants = user.skillsOffered.some((skill) =>
      otherUser.skillsWanted.includes(skill)
    );
    return offers && wants;
  });
}

module.exports = matchUsers;
