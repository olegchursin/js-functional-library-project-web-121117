fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          iteratee(collection[i], i, collection);
        };
      } else {
        for (const key in collection) {
          iteratee(key, collection[key], collection);
        };
      };
      return collection;
    },

    map: function(collection, iteratee) {

      if (Array.isArray(collection)) {
        const newCollection = []
         for (let i = 0; i < collection.length; i++) {
           newCollection.push(iteratee(collection[i], i, collection))
         };
         return newCollection;
      } else {
        const newCollection = []
        for (const key in collection) {
          newCollection.push(iteratee(collection[key], key, collection))
        };
        /// returns an Object rather than array
        // const newCollection = {}
        // for (const key in collection) {
        //   newCollection[key] = iteratee(collection[key], key, collection)
        // };
        return newCollection;
      };

    },


    // Reduce example from our lecture
    // const reduce = function(collection, iteratee) {
    //   accumulator = 0;
    //   for (i = 0; i < collection.length; i++) {
    //     accumulator = iteratee(accumulator, collection[i]);
    // }
    // return accumulator;
    // }

    reduce: function(collection, callback, acc) {
     for (let i = 0; i < collection.length; i++) {
       acc = callback(acc, collection[i], collection)
     }
     return acc;
    },

    // var sum = fi.reduce([1, 2, 3], function(acc, val, collection) { return acc + num; }, 0);



    find: function(collection, predicate) { // predicate == callback
      // use regular for loop
      // if condition is met, return that instance

      //let val;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]; // return is twofold here: 1. breaks the loop, and 2. return the val from within the for loop
        };
      };
      //return val;
    },

    /// find test
    // var even = fi.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });


    filter: function(collection, predicate) { // predicate == callback
      // return new keyArray
      // regular for loop
      // if condition is met .push to the new array
      let newArray = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newArray.push(collection[i]);
        };
      };
      return newArray;
    },

    // test filter
    // var evens = fi.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });



    size: function(collection) {
      let count = 0;
      for (const key in collection) {
        count+=1;
      }
       return count;
    },

    // test size
    // fi.size({one: 1, two: 2, three: 3});



    first: function(array, n=1) {
      // ? slice
      return array.slice(0,n)
    },

    // test first
    // fi.first([5, 4, 3, 2, 1]);



    last: function(array, n=1) {
      // ? slice
      return array.slice(-n)
    },

    // test last
    // fi.last([5, 4, 3, 2, 1]);




    compact: function(array) {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i]);
        };
      };
      return newArray;
    },



    sortBy: function(array, callback) {
      return array.sort(function(a, b) {return callback(a) - callback(b)});
    },


    keys: function(object) {
      // new array for keys
      // for ... in loop
      let newArray = [];
      for (const key in object) {
        newArray.push(key)
      }
      return newArray;
    },

    // fi.keys({one: 1, two: 2, three: 3});


    values: function(object) {
      // new array for values
      // for ... in loop
      let newArray = [];
      for (const key in object) {
        newArray.push(object[key])
      }
      return newArray;
    },

    functions: function() {
      return this.keys(fi);
    }

  }
})()

fi.libraryMethod()
