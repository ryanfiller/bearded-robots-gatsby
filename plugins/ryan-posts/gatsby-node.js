const axios = require('axios');
const crypto = require('crypto');

const API_URI = 'https://www.ryanfiller.com/syndicate.json';

exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;
  const result = await axios.get(API_URI);
  const siteMetadata = result.data.siteMetadata
  result.data.blogPosts.map(async (post, index) => {
    const {
      fields: { slug },
      frontmatter: {
        title,
        meta: {
          date,
          category,
          tags,
          excerpt,
        },
        thumbnail,
        banner
      },
      body,
      rawBody
    } = post; 
       
    await createNode({
      id: index.toString(),
      title: title,
      date: date,
      slug: slug,
      external_url: siteMetadata.siteUrl + slug,
      thumbnail: {
        url: thumbnail.url,
        alt: thumbnail.alt,
      },
      banner: {
        url: banner.url,
        alt: banner.alt,
      },
      excerpt: excerpt,
      category: category,
      tags: [
        ...category,
        ...tags
      ],
      body: body,
      
      parent: null,
      children: null,
      internal: {
        type: 'RyanPost',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(post))
          .digest(`hex`),
      },
    })
  })
};