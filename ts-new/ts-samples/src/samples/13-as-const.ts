// -------------------- as const -------------------- //

// first, let understand const vs let
(() => {
  const x = "hello";
  // what is the type of x?
  // type of 'x' is 'hello'
})();

// as const with objects
(() => {
  const obj = { x: "hello", y: 17 };

  obj.x = "world";
  obj.y = 18;

  // now, let's see the difference between const and as const
  // we can make this object immutable by using as const
  const asConstObj = { x: "hello", y: 17 } as const;

  asConstObj.x = "world"; // this will throw an error
  asConstObj.y = 18; // this will throw an error
})();

// as const with arrays
(() => {
  const arr = [1, 2, 3];

  arr[0] = 4;

  const asConstArr = [1, 2, 3] as const;

  asConstArr[0] = 4; // this will throw an error
  asConstArr.push(4); // this will throw an error
})();

// the REAL power of as const
(() => {
  const userRoles = ["admin", "user", "guest"] as const;

  type Role = (typeof userRoles)[number];

  function getPermissionByRole(role: Role) {
    switch (role) {
      case "admin":
        return ["read", "write", "delete"];
      case "user":
        return ["read", "write"];
      case "guest":
        return ["read"];
      default:
        throw new Error("Invalid role");
    }
  }

  const a = getPermissionByRole(userRoles[0]);
  const adminPermissions = getPermissionByRole("admin");
  const userPermissions = getPermissionByRole("user");
  const guestPermissions = getPermissionByRole("guest");
  const x = getPermissionByRole("baba");
  const y = getPermissionByRole(123);
})();
