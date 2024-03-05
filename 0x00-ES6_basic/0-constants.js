// Use `export` before the function declaration to export them
export function taskFirst() {
    const task = 'I prefer const when I can.'; // Changed `var` to `const`
    return task;
  }
  
  export function taskNext() {
    let combination = 'But sometimes let'; // Changed `var` to `let`
    combination += getLast();
  
    return combination;
  }

  export function getLast() {
    return ' is okay';
  }
  