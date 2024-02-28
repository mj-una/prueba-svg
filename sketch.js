
let w, h;
let dx, dy;
let px, py;

function setup() {

	createCanvas(108, 192, SVG);
	windowResized();

	w = width;
	h = height;

	dx = true;
	dy = true;

	px = 0;
	py = 0;

	noStroke();

}


function draw() {

	clear();

	let fr = frameCount % 200;
	let dm = 20;
	let rd = dm * 0.5;

	fill(fr + 55, 190, 255);
	rect(0, 0, w, h);

	fill(80, 255, 120);
	circle(px, py, dm);

	// vel x
	if (px + rd > w) dx = false;
	else if (px - rd < 0) dx = true;

	if (dx) px++;
	else px--;

	// vel y
	if (py + rd > h) dy = false;
	else if (py - rd < 0) dy = true;

	if (dy) py++;
	else py--;
}


function touchEnded() {

	if (
		mouseX < 0 ||
		mouseY < 0 ||
		mouseX > w ||
		mouseY > h ) {
			noLoop();
		}
}

function windowResized() {
  
  let pag = document.getElementsByTagName("body")[0];
  let cnv = document.getElementById("defaultCanvas0");
  let svg = cnv.getElementsByTagName("svg")[0];

  let mrg = 0;
  
  pag.style.backgroundColor = "rgb(200 250 180)";
  pag.style.overflow = "hidden";
  pag.style.display = "flex";
  pag.style.justifyContent = "center";
  pag.style.alignItems = "center";
  pag.style.height = "100svh";
 
  if (windowWidth * height > windowHeight * width) {
    cnv.style.height = (100 - mrg * 2) + "svh";
    cnv.style.width = ((100 - mrg * 2) / height) * width + "svh";
  }
  else {
    cnv.style.width = (100 - mrg * 2) + "vw";
    cnv.style.height = ((100 - mrg * 2) / width) * height + "vw";
  }

	svg.removeAttribute('width');
	svg.removeAttribute('height');

	let mx = 100;
	let my = (mx * 16) / 9;

	svg.style.width = mx + "vw";
	svg.style.height = my + "vw";
	svg.style.maxWidth = "100%";

}
