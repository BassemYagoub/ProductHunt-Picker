
export const query : string = `
query PostsAfterXBeforeYQuery ($postedBefore : DateTime!, $postedAfter : DateTime!, $first: Int, $after: String) {
    posts(postedBefore: $postedBefore, postedAfter: $postedAfter, first: $first, after: $after) {
        totalCount
        pageInfo {
            hasNextPage
            endCursor
        }
        nodes {
            id
            createdAt
            name
            description
            website
            votesCount
            tagline
            topics {
                nodes{
                    slug
                }
            }
            thumbnail{
              url
            }
        }
    }
}
`;
