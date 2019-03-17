import React from 'react';

function repeat(n, action){
    for(let i=0; i<10; i++){
      action(i);
    }
  }

  repeat(4, console.log);

export default repeat;