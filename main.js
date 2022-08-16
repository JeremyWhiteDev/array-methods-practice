// practice for array methods

/* For each of the sections, consider the array and the method.  What would you expect the output to be? */
let letters = ['l', 's', 'a', 'r', 'd', 'f']

// letters.sort()
//sorts by pre-difined rules, and sorts IN Place, mutating the array.

// letters.pop()
//mutates array, poping the last item from the array.



// letters.push('q')
// pushes one item to the array

// letters.shift()
//removes first element from array



// letters.unshift('y')
//adds element to start of array.



// console.log(letters.slice(1,3));
//extracts elements from array, index start and index end(up to but not included)!

// console.log(letters);

let names = ['John', 'Mandeep', 'Ruby', 'Rose', 'Jackson'];

// console.log(names.concat(letters));
//creates a new array with two combined together.


// console.log(names.join(''))
//string concatenates an array, the argument for this is what will be placed IN BETWEEN each element when stringifying.




names.reverse()
//mutates original array and reverses the indexes.

console.log(names)


let superheroes = ['Wonder Woman', 'Captain America', 'Spiderman', 'Batman', 'The Flash']
// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".

// superheroes.forEach(element => console.log(element));
//with for each, you have to have a function, because there is no pre-defined syntax like a for... of.



let superheroesDetails = [
    {
        id: 1,
        name:'Wonder Woman',
        isDC : true
      },
      {
        id: 1,
        name:'Captain America',
        isDC : true
      },
      {
        id: 1,
        name:'Batman',
        isDC : true
      },
      {
        id: 1,
        name:'The Flash',
        isDC : true
      },
      {
        id: 1,
        name:'Spiderman',
        isDC : false
      }
    ]


    
    
    // iterate over superheroesDetails if the superhero is a DC character (isDC = true)  console log "<the heros name> is in the Justice League.".  Otherwise console log "<the heros name> is a superhero" in the following sentence "<NAME> is a superhero!".
    
    superheroesDetails.forEach(element => { 
        if (element.isDC) {
            console.log(element.name + 'is in the Justice Leage')
        } else {
            console.log(element.name + 'is a superhero')

        }

    })



    const outfits = [
        {
          id: 1,
          bottoms: "slacks",
          top: "orange",
          shoes: "leather",
          style: "formal",
          own: false
        },
        {
          id: 3,
          bottoms: "jeans",
          top: "t-shirt",
          shoes: "flip flops",
          type: "casual",
          own: true
        },
        {
          id: 2,
          bottoms: "yoga",
          top: "tank top",
          shoes: "flip flops",
          type: "casual",
          own: false
        },
        {
          id: 9,
          bottoms: "skirt",
          top: "blouse",
          shoes: "heals",
          type: "formal",
          own: true
        },
        {
          id: 6,
          bottoms: "shorts",
          top: "tank top",
          shoes: "none",
          type: "casual",
          own: true
        },
        {
          id: 7,
          bottoms: "jeans",
          top: "sweater",
          shoes: "boots",
          type: "casual",
          own: true
        },
        {
          id: 8,
          bottoms: "slacks",
          top: "t-shirt",
          shoes: "",
          type: "formal",
          own: false
        },
      ]
      
      /* considering the array outfits, use map, filter and find to do the following */
      
      ///Make a copy of outfits called outfitsCopy that can be modified without changing outfits directly.

      // const outfitsCopy = outfits.map(x => {
      //   return {...x}
      // })

      // outfitsCopy.pop();
      // console.log(outfits)
      // console.log(outfitsCopy)
    
     

      
      //Change a value on outfitsCopy and use console logs to show you did not change outfits
      // outfitsCopy.pop()
      // outfitsCopy[0].bottoms = "pants"

      // console.log(outfitsCopy)
      // console.log(outfits)

   

    //Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.

    //  const outfitsCopy = outfits.map(x => {
    //   return {...x} 
    // })

    // outfitsCopy.map(x => {x.accessories = false})
    // console.log(outfits)
    // console.log(outfitsCopy)
      
 

      //Make a copy (map) of outfits that contains only the properties of id, bottoms, tops and shoes

      // const outfitsCopy = outfits.map(x => {
      //   let toCopy = {}
      //   toCopy.id = x.id;
      //   toCopy.bottoms = x.bottoms;
      //   toCopy.top = x.top;
      //   toCopy.shoes = x.shoes;
      //   return toCopy;
        
      // })
      // console.log(outfitsCopy);



      //filter outfits to give only outfits that are casual

      // const outfitsCopy = outfits.filter(x => {
      //    return x.type === "casual";
      // })
      // console.log(outfitsCopy)
      
      
      // filter outfits to give only outfits that are owned
      
      // const outfitsCopy = outfits.filter(x => {
      //    return x.own === true;
      // })
      // console.log(outfitsCopy)
      
      
      
      // use find to return an outfit that has no shoes
      
      // const outfitsCopy = outfits.find(x => {
      //    return x.shoes == false;
      // })
      // console.log(outfitsCopy)


      // use find to return an outfit that has boots

    //   const outfitsCopy = outfits.find(x => {
    //     return x.shoes === "boots";
    //  })
    //  console.log(outfitsCopy)
    
    
    //Bonus:
    // use find to return an outfit that has jeans and a t-shirt
    
    //   const outfitsCopy = outfits.find(x => {
    //     return x.top === "t-shirt" && x.bottoms === "jeans";
    //  })
    //  console.log(outfitsCopy)



     const animals = [
        {
          id: 3,
          name: "Rex",
          trait: "mischievous",
          species: "dog",
          isReal: true
        },
        {
          id: 9,
          name: "Joel",
          trait: "playful",
          species: "dog",
          isReal: true
        },
        {
          id: 5,
          name: "Cleo",
          trait: "friendly",
          species: "rat",
          isReal: true
        },
        {
          id: 8,
          name: "Draco",
          trait: "grumpy",
          species: "dragon",
          isReal: false
        },
        {
          id: 2,
          name: "George",
          trait: "curious",
          species: "monkey",
          isReal: true
        },
        {
          id: 1,
          name: "Peanut",
          trait: "needy",
          species: "cat",
          isReal: true
        },
        {
          id: 1,
          name: "Lexi",
          trait: "shy",
          species: "cat",
          isReal: true
        }
      ]
      
      // iterate over animals and console log each animal by the following conditions:
      
      // if the animal is a dragon console log "I am mythical."
      // if the animal is a dog console log "I bark."
      // if the animal is a monkey or a rat console log the animals name and "I am a rat or monkey."
      // if the animal is a cat  is needy console log "I am Sydney's cat."
      // if the animal does not meet any of the above conditions console log the animals name, trait and species;
      const msg = (arr) => {
        arr.map(x => {
            if (x.species === "dragon") {
                console.log("I am mythical.")
            } else if(
                x.species === "dog"
            ) {
                console.log("I bark.")
            } else if(
                x.species === "monkey" || x.species === "rat") {
                console.log("I am a rat or monkey.")
            
            } else if(
                x.species === "cat" && x.trait === "needy") 
                {
                console.log("I am Sydney's cat.")
            } else {
                console.log(x.name);
                console.log(x.trait);
                console.log(x.species)
            }
        })
      }
      
    //   msg(animals);
    //   // BONUS:  Sort the array of animals by id.
      
      const sortArray = (array) => {
        array.sort((a, b) => {
            return a.id - b.id;
        }
        )
    }

      sortArray(animals)
      console.log(animals)

