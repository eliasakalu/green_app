export const parseAssetReference = (value) => {
  if (value === null || value === undefined) return value;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    if (/^\d+$/.test(value)) return Number(value);
    return value;
  }
  return value;
};

export const getImageSource = (cover) => {
  if (!cover) return null;

  if (typeof cover === 'number') return cover;

  if (typeof cover === 'object' && cover !== null) {
    if (cover.uri) return { uri: cover.uri };
    if (cover.default) return cover.default;
    return cover;
  }

  if (typeof cover === 'string') {
    if (/^\d+$/.test(cover)) return Number(cover);
    if (cover.startsWith('http://') || cover.startsWith('https://')) {
      return { uri: cover };
    }
  }

  return null;
};

export const getAudioSource = (audioUrl) => {
  if (!audioUrl) return null;
  if (typeof audioUrl === 'number') return audioUrl;
  if (typeof audioUrl === 'string') {
    if (/^\d+$/.test(audioUrl)) return Number(audioUrl);
    return { uri: audioUrl };
  }
  return audioUrl;
};

export const isRemoteAudio = (audioUrl) => typeof audioUrl === 'string' && (audioUrl.startsWith('http://') || audioUrl.startsWith('https://'));
