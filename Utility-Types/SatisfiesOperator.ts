// info: more information in this blog https://refine.dev/blog/typescript-satisfies-operator/

type TAddress = {
   addressLine1: string;
   addressLine2?: string;
   postCode: number | string;
   city: string;
   state: string;
   country: string;
};

type UserKeys = 'username' | 'email' | 'firstName' | 'lastName' | 'address';
type TUser = Record<UserKeys, string | TAddress>;

const joe = {
   username: 'joe_hiyden',
   email: 'joe@exmaple.com',
   firstName: 'Joe',
   lastName: {
      addressLine1: '1, New Avenue',
      addressLine2: 'Old Avenue',
      postCode: 12345,
      city: 'California',
      state: 'California',
      country: 'USA',
   },
   address: 'test',
} satisfies TUser;

console.log(joe.address);

/// info:  also we can use Partial<> to optional all property

const joe2 = {
   username: 'joe_hiyden',
   email: 'joe@exmaple.com',
   lastName: {
      addressLine1: '1, New Avenue',
      addressLine2: 'Old Avenue',
      postCode: 12345,
      city: 'California',
      state: 'California',
      country: 'USA',
   },
   address: 'test',
} satisfies Partial<TUser>;

console.log(joe2); // without complaining it's work
