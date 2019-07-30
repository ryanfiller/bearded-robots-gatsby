const axios = require('axios');
const crypto = require('crypto');

const API_URI = 'https://www.ryanfiller.com/syndicate.json';

exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;
  const result = await axios.get(API_URI);
  result.data.items.map(async (post, index) => {
    await createNode({
      parent: null,
      children: null,
      id: index.toString(),
      title: post.title,
      date: post.date_modified,
      excerpt: post.summary,
      content: post.content_html,
      url: post.url,
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