'use strict';

import * as https from 'https';
import LineParser from "./line-parser";

const m = new Map<string, { hits: number, misses: number }>();

const url =
  'https://gist.githubusercontent.com/clanchun/2b5e07cda53718ccbf64f62fb31900c8/raw/64be7f018973717dd5faa7be2bfb817f50ed05bb/access.log';

const req = https.get(url, res => {
  
  res.pipe(new LineParser()).on('data', d => {
      
      const columns = String(d).split(/\s+/g);
    
      const hitOrMiss = columns[6];
      const videoURL = columns[9];
      const urlTokens = videoURL.split('/');
      const videoFileName = urlTokens.pop();
      const videoId = urlTokens.pop();
      const hit = hitOrMiss.startsWith('TCP_HIT/');
      
      if (!m.has(videoId)) {
        m.set(videoId, {hits: 0, misses: 0});
      }
      
      const v = m.get(videoId);
      
      if (hit) {
        v.hits++;
      }
      else {
        v.misses++;
      }
      
    })
    .on('end', () => {
      
      for (let [k, v] of m) {
        console.log('video:', k, v, 'hit rate:', v.hits/(v.hits + v.misses));
      }
      
      // NOTE: data structure: [[videoId,{}],[videoId,{}],[videoId,{}]]
      
      const list = Array.from(m).sort((a,b) => {
         return parseInt(a[0]) - parseInt(b[0]);
      });
      
      for(const v of list){
        console.log('sorted line:', v[0],v[1]);
      }
      
    });
  
});

req.end();
