const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");
//this tell how user looks like
const userType = new GraphQLObjectType({
  name: "User", //name value should be table name,
  fields: () => ({
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
  }),
});
module.exports = userType;
