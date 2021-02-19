var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }
   console.log(myCar.accidents.length);
   //1--Loop over the accidents array. Change atFaultForAccident from true to false.
   for(var j in myCar)
   {
       if(j=='accidents')
       {
           for(var i=0;i<myCar.accidents.length;i++)
           {
               myCar.accidents[i].atFaultForAccident='false'
           }
        }
   }
   //2--Print the dated of my accidents
//    for(i in myCar)
//    {
//        if(i=='accidents')
//        {
//            for(j=0;j<myCar.accidents.length;j++)
//            {
//        console.log(myCar.accidents[j].date)
//            }
//        }
//    }
   for(var k=0;k<myCar.accidents.length;k++)
   {
       console.log(myCar.accidents[k].date);
   }
   console.log(myCar);