import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const typeDefs = `
type EntryPoint {
    title: String!
}

enum ControlActionStatus {
    requested
    received
    accepted
    starting
    running
    stopping
    complete
    error
  }

type ControlAction {
    identifier: ID
    description: String!
    actionStatus: ControlActionStatus
    error: String
    target: EntryPoint
  }

# the schema allows the following query:
type Query {
    ControlAction(
        identifier: String
        targetIdentifier: String
        offset: Int
        first: Int
      ): [ControlAction]
  }
`;

// make schema with no resolvers
const schema = makeExecutableSchema({ typeDefs });

// add mocks to modify schema
addMockFunctionsToSchema({ schema });

const query = `
query ControlAction {
    ControlAction {
      identifier
      description
      actionStatus
      error
      target {
         title
      }
    }
}
`;

export const mockQuery = () => graphql(schema, query).then(result => console.log('Mock query', result));

