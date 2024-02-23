Things which I learnt ✍️ from this project📚 :
1. How to store data in LocalStorge :
   👉 use : locastorage.setItem(); --> this take 2 parameter key and value . 
2. How to get data from LocalStorage :
   👉 use : locastorage.getItem();
3. How to update values of LocalStorage which are already present :
  you need to have key of that particular value after that update value and again store that value to that particular value in that key
   ex : value = value + "new value";
   👉 use : locastorage.setItem();
4. Here I have generated random keys of 11 length cause I don't know how much task will be added by user.
5. How to fetch the keys and values from LocalStorage :
   👉 use for loop and you will get that desired result
   ex: for(let i = 0;i <= localstorage.length;i++){
          locastorage.getItem(key[i],value[i]);
   }
6. The big problem i was facing is that how to remeber that which task was enter 1st and which was last :
   so I used timstamp which will add time at the end of that value(task)which was entered and according to that each task will be sorted and will be featched again.
7. Now it is neccessary to make some change when task is over for that I changed color of div and apply line-through property but issue came when I was revisiting the page they were setted on there
   default values so for I added  *  at the end of value which will denoting that task has already been done . but my sorting logic is not properly woking after adding * .
      
8. How to make timer or realtime clock :
   👉 use Date module and fetch hours,minutesand seconds.
   to make time clock realtime use setInterval and set to 1000(1ssecond) which will keep updating your clock.
9. To remove all the keys and value from localstorage I have used :
    localstorage.clear(); will remove all keys and value .

Visit the Project directly from here :
👉👉👉 https://harsh749005.github.io/ToDo-List-with-Backend/
