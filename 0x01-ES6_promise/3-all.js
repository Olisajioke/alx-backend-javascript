import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${user.body.firstName} ${user.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
