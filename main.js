function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('res').value;
   try {
      var num2 = eval(num1.replace('x', '*'));
      document.getElementById('res').value = num2;
   } catch {
      document.getElementById('res').value = 'Error';
   }
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
      Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
      Result();
   } else if (key === 'Backspace') {
      Back();
   } else if (key.toLowerCase() === 'c') {
      Clear();
   }
});


 const gradients = [
      ['#ff9a9e', '#fad0c4'],
      ['#a18cd1', '#fbc2eb'],
      ['#fad0c4', '#ffd1ff'],
      ['#ffecd2', '#fcb69f'],
      ['#f6d365', '#fda085'],
      ['#96e6a1', '#d4fc79'],
      ['#84fab0', '#8fd3f4'],
      ['#cfd9df', '#e2ebf0']
    ];

    let current = 0;

    function changeGradient() {
      current = (current + 1) % gradients.length;
      const [start, end] = gradients[current];
      document.body.style.background = `linear-gradient(45deg, ${start}, ${end})`;
    }

    setInterval(changeGradient, 4000); // every 4 seconds