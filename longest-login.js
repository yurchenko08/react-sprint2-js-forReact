function longestLogin(loginList) {
  return loginList.reduce((acc, value) => {
    return value.length > acc.length || value.length === acc.length
      ? value
      : acc;
  });
}
console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"])); //  Prokopenko

console.log(longestLogin(["user1", "user2", "333", "user4", "aa"])); //  user4);
