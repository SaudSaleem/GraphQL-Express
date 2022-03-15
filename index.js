const express = require("express");
const app = express();
const PORT = 6969;
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphql: true,
  })
);
app.listen(PORT, () => {
  console.log("Graph QL server is running");
});

//mutations create, update, delete data in DB
//queries Get data from db

//Schema is combination of both mutations and queries

//HOW TO QUERY FROM FRONTEND
// query
// {
//   getAllUsers{  we will only get mentioned fields (that the benefits)
//     firstName,
//     lastName
//   }
// }

//HOW TO UPDATE USER FROM FRONTEND
// mutation{
//   createUser(firstName:'saud',lastName:'saleem',email:'saudsaleem6@gmail.com',password:'fakepassword'){
//     firstName,
//     lastName,
//     email
//   }
// }
