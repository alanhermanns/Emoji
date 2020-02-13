// ['w8bm5Sue_0Y', 'w8bm5Sue_0Y', 'w8bm5Sue_0Y']
// [{ videoId: 'w8bm5Sue_0Y', thumbnailUrl: 'https://img.youtube.com/vi/w8bm5Sue_0Y/default.jpg'}]
export const getThumbnails = state => state.map(videoId => ({
  thumbnailUrl: `https://img.youtube.com/vi/${videoId}/default.jpg`,
  videoId
}));
