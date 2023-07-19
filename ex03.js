var arrayJob = [
    {job:"Sleeping",duration:5},
    {job:"Working",duration:3},
    {job:"Playing",duration:6},
    {job:"Reading",duration:2}
];
// Sleeping 0
// Sleeping 1
// ... 
//  Sleeping 4
//Working 0
// ... 
// Working 2
//  ... 
// what a day 
var action = function(arrayJob, start,count) {
  return new Promise((resolve, reject) => {
      if (start < arrayJob.length){
          if(count >= arrayJob[start].duration){
            resolve(action(arrayJob,start+1,0));
          }else{
            setTimeout(()=>{
              console.log(arrayJob[start].job + " " + count);
              resolve(action(arrayJob,start,count+1));
            },1000)
          }
      }else{
        resolve();
      }
  });
};

action(arrayJob, 0,0)
  .then(() => {
    console.log("What a day!");
  })
  .catch(() => {
    console.log("Error");
  });

