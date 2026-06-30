import { createSlice } from '@reduxjs/toolkit';

interface Profile {
  name: string;
  bio: string;
}

interface Link {
  id: number;
  title: string;
  url: string;
  icon: string;
}

interface LinksState {
  profile: Profile;
  links: Link[];
}

const initialState: LinksState = {
  profile: {
    name: 'Mosab',
    bio: 'Software Developer | React ',
    },
  links: [
    { id: 1, title: 'GitHub', url: 'https://github.com', icon: 'github' },
    { id: 2, title: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { id: 3, title: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { id: 4, title: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { id: 5, title: 'Snapchat', url: 'https://snapchat.com', icon: 'snapchat' },
    { id: 6, title: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
  ],
};

export const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
  },
});

export default linksSlice.reducer;
