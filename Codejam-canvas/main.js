document.getElementById('size4').addEventListener('click',() => {
    draw4();
  })
  
document.getElementById('size32').addEventListener('click',() => {
    draw32();
  }) 

document.getElementById('size256').addEventListener('click',() => {
    drawPng();
  })

let size = document.getElementById('size').value;
size = parseInt(size);
document.getElementById('canvas').style.width = `${size}px`;
document.getElementById('canvas').style.height = `${size}px`;
  function draw4(){
    const getArr = async (url) => {
      try {
        const arr = await fetch(url).then(responce => responce.json())
        return arr;
      } catch(err){
        console.log(err)
      }
    }
    let size = document.getElementById('size').value;
    size = parseInt(size);
    let mas = getArr('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    mas.then(data => {
      for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
          let res = '#';
          let x = size / data.length * i;
          let y = size / data.length * j;
          res += data[i][j];
          ctx.fillStyle = res;
          ctx.fillRect(x,y,size / data.length,size / data.length);
        }
      }
    })
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvas').style.background = 'none';
  }

  function draw32(){
    const getArr = async (url) => {
      try {
        const arr = await fetch(url).then(responce => responce.json())
        return arr;
      } catch(err){
        console.log(err)
      }
    }
    let size = document.getElementById('size').value;
    size = parseInt(size);
    let mas = getArr('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    mas.then(data => {
      for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data.length; j++){
          let res = 'rgba(';
          res += data[i][j];
          res += ')';
          let x = size / data.length * i;
          let y = size / data.length * j;
          ctx.fillStyle = res;
          ctx.fillRect(x,y,size / data.length,size / data.length);
        }
      }
    })
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvas').style.background = 'none';
  }
  
function drawPng(){
    let size = document.getElementById('size').value;
    size = parseInt(size);
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';
    img.onload = function(){
    ctx.drawImage(img,0,0,size,size);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvas').style.background = 'none';
}