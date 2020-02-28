import {  gql} from "apollo-boost";

export const typeDefs=gql`
type Setting{
    layout:String
}

extend Query{
    setting:Setting
}

mutation ChangeSetting($layout: String!) {
    changeSetting(layout: $layout) @client
  }
`
export const defaults={
    setting:{
        layout:'Layout1'
    }
}

export const resolvers = {
    Query: {
      setting: (_, args, { cache }) => {
        // ... calculate and return the number of messages in
        // the cache ...
        return {
            layout:'Layout1'
        };
      },
    },
    Mutation: {
        setting: (_root, {layout}, { cache, getCacheKey }) => {
            const data = { layout, __typename: 'Filter' };
            cache.writeData({ data });
        },
      },
  };