const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");
//this tell how user looks like
const userType = new GraphQLObjectType({
  name: "User", //name value should be table name,
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

module.exports = userType;
