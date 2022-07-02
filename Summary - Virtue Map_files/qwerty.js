let cifres = localStorage.getItem("vall")
console.log(cifres)
let spannn = document.querySelector('.spannn');
console.log(spannn)
let imgdinamic = document.querySelector('.imgdinamic');
if (cifres < 200) {
	spannn.innerHTML = '21 (ВЫСОКИЙ)'
	imgdinamic.setAttribute("src", "./Summary - Virtue Map_files/21.png");
}
if (cifres > 200 && cifres < 400) {
	spannn.innerHTML = '26 (ВЫСОКИЙ)'
	imgdinamic.setAttribute("src", "./Summary - Virtue Map_files/26.png");
}

if (cifres > 400) {
	spannn.innerHTML = '28 (ВЫСОКИЙ)'
	imgdinamic.setAttribute("src", "./Summary - Virtue Map_files/28.png");
}