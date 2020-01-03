
import * as express from 'express';

const app = express();
import {alloc,dealloc} from "./machines";

app.post('/alloc', (req,res,next) =>{

  const {machineType} = req.query;

  let success = false;

  try {
    var value = alloc(machineType);
    success = true;
  }
  catch(err){
    value = null;
  }

  res.json({
    success,
    value
  });

});

app.delete('/dalloc', (req,res,next) =>{

  const machineName = req.query.machineName;

  res.json({
    success: true,
    value: dealloc(machineName)
  });

});


export {app};


