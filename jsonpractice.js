var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
  // 1--Add height and weight to Fluffy
   cat.height='2 feet';
   cat.weight='10kg'
  // 2--Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name='Fluffyy';
  //3--List all the activities of Fluffyy’s catFriends.
   console.log(cat.catFriends[0].activities +'\n'+cat.catFriends[1].activities)
  //4--Print the catFriends names.
  console.log(cat.catFriends[0].name+'\n'+cat.catFriends[1].name)
  //5--Print the total weight of catFriends
  console.log(+cat.catFriends[0].weight+ +cat.catFriends[1].weight)
  //6--Print the total activities of all cats (op:6)
  console.log(cat.catFriends[0].activities.length+cat.catFriends[1].activities.length)
  //7--Add 2 more activities to bar & foo cats
  cat.catFriends[0].activities.push('lazy','hunting');
  cat.catFriends[1].activities.push('jumping','scratching');
  console.log(cat.catFriends[0].activities)
  console.log(cat.catFriends[1].activities)
  //8--Update the fur color of bar
  cat.catFriends[0].furcolor='black';
  console.log(cat.catFriends[0].furcolor)
   
//  console.log(cat);


   