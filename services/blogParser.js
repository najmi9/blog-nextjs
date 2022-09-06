const postsMetadata = (data) =>  data.map(post => parsePost(post).metaData);

function parsePost(post) {
    const parts = post.split('---');

    const meta = parts[1];

    const items = meta.split('\n');

    const metaData = {};

    items.forEach(line => {
        const ps = line.split(': ');
        if (ps.length > 1) {
            metaData[ps[0]] = ps[1];
        }
    });

    parts.splice(0, 2);

    return {
        metaData,
        content: parts.join('---')
    };
}

export {
    postsMetadata,
    parsePost
};
