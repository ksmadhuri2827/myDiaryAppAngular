export interface Entry {
  id?: number;
  entrydate: string; // Use string because dates are usually serialized as strings in JSON
  description: string;
  userid: number;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface UserLoginWithEntriesDto {
  user: User;
  entrieslist: Entry[];
}

export interface EntriesAndUser {
  user: User;
  entrieslist: Entry[];
}


