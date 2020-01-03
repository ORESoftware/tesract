
import {app} from "./app";


process.on('unhandledRejection', (e,p) => {

});


const s = app.listen(3000, () => {
  console.log('Listening on port:', 3000);
});

app.on('error', e => {

});

s.on('error', e => {
  console.error('this is the server object error:', s);
});


// GRPC
// shane mooney -> medium
