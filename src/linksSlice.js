import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Mosab',
    bio: 'Software Developer | React ',
    },
  links: [
    { id: 1, title: 'GitHub', url: 'https://github.com', icon: 'github' },
    { id: 2, title: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { id: 3, title: 'Snapchat', url: 'https://snapchat.com', icon: 'snapchat' },
  ],
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
  },
});

export default linksSlice.reducer;
