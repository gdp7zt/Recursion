function fibsRec(n){
    if (n === 1 ) return [0];
    if (n===2) return [0, 1];
    else 
    {
      var s = fibsRec(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  }