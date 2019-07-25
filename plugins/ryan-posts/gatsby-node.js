const axios = require('axios');
const crypto = require('crypto');

const API_URI = 'https://raw.githubusercontent.com/ryanfiller/portfolio-gatsby/master/syndicate.json';

exports.sourceNodes = async ({actions}) => {
  const {createNode} = actions;
  const result = await axios.get(API_URI);
  for (const post of result.data) {
    await createNode({
      children: [],
      id: `${post.id}`,
      title: post.title,
      value: post.value,
      parent: null,
      internal: {
        type: 'RyanPost',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(post))
          .digest(`hex`),
      },
    });
  }
};