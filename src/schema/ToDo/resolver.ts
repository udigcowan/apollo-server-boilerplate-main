import { Resolvers } from '../../types/generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    todoitem: async (_, { ID }, { dataSources }) => {
      return dataSources.testService.GetToDoItemObject({ID});
    },
  },
};