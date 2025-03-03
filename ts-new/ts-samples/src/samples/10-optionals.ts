// -------------------- Optionals -------------------- //

(() => {
  type User = {
    name: string;
    age: number;
    nickname?: string;
  };

  const user1: User = {
    name: "John",
    age: 20,
    nickname: "Johny",
  };

  const user2: User = {
    name: "John",
    age: 20,
  };

  function getUserNickname(user: User) {
    return user.nickname;
  }

  const nickname = getUserNickname(user1);
  const nickname2 = getUserNickname(user2);
})();

(() => {
  function doSomething(x: number, y?: number) {
    if (y) {
      console.log(x + y);
    } else {
      console.log(x);
    }
  }

  doSomething(1);
  doSomething(1, 2);
  doSomething(1, 2, 3);
})();
