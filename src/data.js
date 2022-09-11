import { v4 as uuid } from 'uuid';

export const defaultUser = {
  id: uuid(),
  username: 'Andi',
  name: 'Andi',
  profile_image:
    'https://yt3.ggpht.com/n3jqAh46wfoODJ0DlAfOI2CKfXhxOH4o5zrlx1KaEJ7ULe9Eo8PKvK_HEJ7sJ3uOy3ibKwFY=s88-c-k-c0x00ffffff-no-rj-mo',
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: 'username',
    name: 'name',
    profile_image:
      'https://yt3.ggpht.com/n3jqAh46wfoODJ0DlAfOI2CKfXhxOH4o5zrlx1KaEJ7ULe9Eo8PKvK_HEJ7sJ3uOy3ibKwFY=s88-c-k-c0x00ffffff-no-rj-mo',
  };
}

export function defaultPost() {
  return {
    id: uuid(),
    likes: 8,
    caption: `lorem`,
    user: 'defaultUser',
    // chossen ranodm video links from netNinja youtube channel
    media: 'myPicture.jpg',
    comments: [],
    created_at: '2022-08-26T03:10:25.448328+00:00',
  };
}
export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 13,
    caption: `Come into our world of programming language,Learn modern ReactJs, javascript, nodejs, and more Full Stack baseed syntax. I hope that this project is going to be my first and big project which i will update and mantain all my life, I will use all possible css framework to style this project and mongodb, firebase  database.`,
    // chossen ranodm video links from netNinja youtube channel
    media:
      'https://www.youtube.com/watch?v=8DploTqLstE&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=2',
    comments: [],
    created_at: '2020-02-28T03:08:14.522421+00:00',
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: 'follow',
    user: defaultUser,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
  {
    id: uuid(),
    type: 'like',
    user: defaultUser,
    post: defaultPost,
    created_at: '2020-02-29T03:08:14.522421+00:00',
  },
];

export const defaultCurrentUser = {
  id: uuid(),
  username: 'Andy',
  name: 'ebibi',
  profile_image:
    'https://yt3.ggpht.com/n3jqAh46wfoODJ0DlAfOI2CKfXhxOH4o5zrlx1KaEJ7ULe9Eo8PKvK_HEJ7sJ3uOy3ibKwFY=s88-c-k-c0x00ffffff-no-rj-mo',
  email: 'Andy@gmail.com',
  bio: 'This is me',
  phone_number: '333-333-3333',
  posts: [],
  followers: [defaultUser],
  following: [defaultUser],
};
