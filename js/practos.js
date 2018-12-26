// В блоке прайстейблов, при наведении они увеличиваются на 20 %. 
// Нижний текст при этом меняет на случайный. 
// При клике на каждую кнопку в прайстейбле страница переводится (прокручивается) на разные блоки на странице.

function scroll(node) {
    let i = 0;
    let scrollelem = node.getAttribute('href'); 
    scrollelem = scrollelem.split('');
    scrollelem.splice(0,1);
    scrollelem = scrollelem.join('');
    let item = document.querySelector(`#${scrollelem}`);
    coordinates = item.getBoundingClientRect();
    positionTop = coordinates.top + pageYOffset;
    windowTop = document.documentElement.scrollTop;
    let interval = setInterval(function(){
        if (windowTop + 5 > positionTop && windowTop - 5 < positionTop) {
            if (windowTop > positionTop){
                window.scrollTo(0,document.documentElement.scrollTop-1);
            } else {
                window.scrollTo(0,document.documentElement.scrollTop+1);
            }
        } else if (windowTop > positionTop){
            window.scrollTo(0,document.documentElement.scrollTop-5);
        } else {
            window.scrollTo(0,document.documentElement.scrollTop+5);
        }
        windowTop = document.documentElement.scrollTop;
        if (windowTop == positionTop){
            clearInterval(interval);
        }
    },1);
}
let whatWeDoLinks = document.querySelectorAll('.whatWeDo a');
let whatWeDoTables = document.querySelectorAll('.whatWeDo figure');
let whatWeDoText;
let text = ['рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба рыба', 'monfrik monfrik monfrik monfrik monfrik monfrik monfrik monfrik monfrik monfrik monfrik', 'кот собака кот собака кот собака кот собака кот собака', 'крышечка ^ крышечка ^ крышечка ^ крышечка ^ крышечка ^ крышечка ^ крышечка ^'];
whatWeDoLinks.forEach(function(element){
    element.addEventListener('click', function(e){
        e.preventDefault();
        scroll(element);
    });
});
whatWeDoTables.forEach(function(element){
    element.addEventListener('mouseover', function(event){
        event.stopPropagation();
        element.style.transform = 'scale(1.2)';
        whatWeDoText = element.querySelector('p');
        whatWeDoText.innerHTML = text[Math.floor(Math.random()*4)];
    });
    element.addEventListener('mouseout', function(event){
        event.stopPropagation();
        element.style.transform = 'scale(1)';
    });
});