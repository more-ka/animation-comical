!function(){
  var duration = 0
  $('.buttons').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active')
    .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
      duration = 100
      break
      case 'normal':
      duration = 50
      break
      case 'fast':
      duration = 1
      break
    }
  })

  function writeCode(prefix,code, fn) {
    let domCode = document.querySelector('.code')
    let styleTag = document.querySelector('.styleTag')
    var n = 0
    var id
    id = setTimeout(function run(){
      n += 1
      domCode.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css, 'css');
      styleTag.innerHTML = code.substring(0, n)
      domCode.scrollTop = domCode.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      }else{
        fn && fn.call
      }
    }, duration)

  }
  let code = `/*给你画一只大大的滑稽*/

.view{
  background: #e7e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}

/*画一个圆脸*/

.comical {
  width: 300px;
  height: 300px;
  background: radial-gradient(ellipse at center, #F5D187 0%, rgba(252, 234, 187, 1) 0%, rgba(252, 205, 77, 1) 100%);
  border-radius: 150px;
  border: 8px solid #F2BA65;
  position: relative;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.75);
}

/*画一个嘴巴*/

.mouth {
  width: 226px;
  height: 200px;
  border-radius: 50%;
  border-bottom: 10px solid #000000;
  position: absolute;
  bottom: 30px;
  left: 28px;
}

/*画两个眼睛*/


.eye::before {
  top: -14px;
  left: -14px;
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border: 4px solid #F1A937;
  border-radius: 150px;
  transform: rotate(45deg);
}
.eye::after {
  top: 0px;
  left: 0px;
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border: 4px solid #F1A937;
  border-radius: 150px;
}

.corner.left::after {
  top: 0px;
  left: 0px;
  position: absolute;
  content: '';
  width: 16px;
  height: 14px;
  border: 4px solid #F1A937;
  border-radius: 15px;
}

.corner.right::before {
  top: 0px;
  right: 0px;
  position: absolute;
  content: '';
  width: 16px;
  height: 14px;
  border: 4px solid #F1A937;
  border-radius: 15px;
}

/*把眼睛放在正确的位置*/

.eyes-l {
  top: 23px;
  left: -7px;
  position: absolute;
}
.eyes-r {
  top: 23px;
  right: 14px;
  position: absolute;
}

/*画眼珠子*/

.eyeball {
  top: 58px;
  left: 11px;
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: #67575A;
}

/*画眼睛的巩膜*/


.bg::before {
  content: "";
  top: -13px;
  left: -20px;
  width: 300px;
  height: 300px;
  position: absolute;
  border: 20px solid #fff;
  border-radius: 50%;
}

/*两根粗粗的眉毛*/


.eyebrow.left::after {
  top: 0px;
  left: 0px;
  content: '';
  width: 60px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  border-top: 10px solid black;
  transform: rotate(20deg);
}
.eyebrow.right::after {
  top: 24px;
  right: 10px;
  content: '';
  width: 60px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  border-top: 10px solid black;
  transform: rotate(-21deg);
}

/*画滑稽的脸蛋*/

.cheek.left {
  top: 113px;
  left: 4px;
  width: 53px;
  height: 25px;
  border-radius: 50%;
  background: #FEBF94;
  position: absolute;
}
.cheek.right {
  top: 113px;
  right: 4px;
  width: 53px;
  height: 25px;
  border-radius: 50%;
  background: #FEBF94;
  position: absolute;
}

/* 完成 */

`
  writeCode('', code)
}.call()