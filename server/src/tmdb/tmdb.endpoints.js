import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
  //
  mediaList: ({ mediaType, mediaCategory, page }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page),

  mediaDetail: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}`),

  mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(`genre/${mediaType}}/List`),

  mediaCredits: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`),

  mediaVideos: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`),

  mediaRecommend: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`),

  mediaSearch: ({ mediaType, query, page }) =>
    tmdbConfig.getUrl(`search/${mediaType}`, { query, page }),

  personDetail: ({ personId }) => tmdbConfig.getUrl(`personId/${personId}`),

  personMedias: ({ personId }) => tmdbConfig.getUrl(`personId/${personId}`),
};

export default tmdbEndpoints;
