const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const userData = require("../MOCK_DATA.json");
const userType = require("./TypeDefs/UserType");

//GraphQLObjectType is used to create the types
//GraphQLSchema is used to create schema

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  //fields defines diffrent types of queries
  fields: {
    getAllUsers: {
      type: new GraphQLList(userType),
      //args:{id:{type: GraphQLInt}} //args such we want to find the user by id, (args.id)
      resolve: (parent, args) => {
        //args that we passed above
        //we can implement all kind of logic in this function
        //select * FROM Users
        return userData;
      },
    },
    //getUserById
    //both above quries looks like REST api endpoints
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    createUser: {
      type: userType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

//schema
const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
module.exports = schema;
