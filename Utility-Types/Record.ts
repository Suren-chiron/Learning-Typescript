// todo : for more information https://refine.dev/blog/typescript-record-type/

/// info : The simple way and unlimited key

type TUserRecord = {
   email: string;
   password: string;
};

const user: Record<string, TUserRecord> = {
   '3xamp1eUSERIdSTOR3DinAdb': {
      email: 'example@example.com',
      password: '12345678',
   },
};

console.log(user['3xamp1eUSERIdSTOR3DinAdb'].email); // "example@example.com"

/// info : the best way and limited key with literal type

type TUserRecord2 = {
   email: string;
   password: string;
};

// ? with this literal we can just set 3 object with limitKey type that define our key
type limitKey = 'user1' | 'user2' | 'user3';
const user2: Record<limitKey, TUserRecord | string> = {
   user1: {
      email: 'example@example.com',
      password: '12345678',
   },
   user2: 'none',
   user3: {
      email: 'example@example.com',
      password: '12345678',
   },
};

console.log(user2.user1); // "example

/// info : A  Quirks, also we can define set type for key

type numberedUser = Record<number, TUserRecord>;

const user3: numberedUser = {
   2: {
      email: 'test@test.com',
      password: 'test',
   },
   3: {
      email: 'test@test.com',
      password: 'test',
   },
};

console.log(user3[2].email);
