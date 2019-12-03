import { allBooks } from './book';

const resolvers = {
  Book: {
    },
  Query: {
    books: async () => {
      const x =  allBooks();
      // y = JSON.parse(x)
      console.log("Books : ",typeof(x),x)
      x.then(data => {
        console.log("Returning3223 :  ", typeof(data),data )
        // return data}
        return data}
      ).catch(err => {
        console.log("Error 1231thrown AVI  ",err)}
        )
      return x;
    },
  },
};

export default resolvers;