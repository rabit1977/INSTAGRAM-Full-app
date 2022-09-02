import { v4 as uuid } from 'uuid';

export const defaultUser = {
  id: uuid(),
  username: 'username',
  name: 'name',
  profile_image:
    'https://yt3.ggpht.com/n3jqAh46wfoODJ0DlAfOI2CKfXhxOH4o5zrlx1KaEJ7ULe9Eo8PKvK_HEJ7sJ3uOy3ibKwFY=s88-c-k-c0x00ffffff-no-rj-mo',
};

export function getdefaultUser() {
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
    media:
      'https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=1',
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

// export const defaultNotifications = [
//     {
//       id: uuid(),
//       type: "follow",
//       user: defaultUser,
//       created_at: "2020-02-29T03:08:14.522421+00:00",
//     },
//     {
//       id: uuid(),
//       type: "like",
//       user: defaultUser,
//       post: defaultPost,
//       created_at: "2020-02-29T03:08:14.522421+00:00",
//     },
//   ];

//   export const defaultCurrentUser = {
//     id: uuid(),
//     username: "me",
//     name: "myself",
//     profile_image:
//       "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF",
//     website: "https://react12.io",
//     email: "me@gmail.com",
//     bio: "This is my bio",
//     phone_number: "555-555-5555",
//     posts: [],
//     followers: [defaultUser],
//     following: [defaultUser],
//   };
