const formNode = document.getElementById('form-example'); //1
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code'); //3
// const nameVAlue = nameNode.value;
const peanutRangeNode = document.getElementById('peanuts'); //5
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes'); //7
const noNode = document.getElementById('no'); 
const peanutNodeTwo = document.getElementById('peanuts-two'); //10

console.log(peanutNodeTwo);


peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value; //6
});

yesNode.addEventListener('change', function() { //8
    // console.log('yes', yesNode.checked);
    if(yesNode.checked) {
        allergicNumberNode.textContent = 1;
        peanutRangeNode.min = 1;
        peanutRangeNode.value = 1;
        peanutRangeNode.disabled = false;
        peanutNodeTwo.required = yesNode.checked; //11
    }
});

noNode.addEventListener('change', function() {
    // console.log('no', noNode.checked);
    if(noNode.checked) {
        allergicNumberNode.textContent = 0;
        peanutRangeNode.min = 0;
        peanutRangeNode.value = 0;
        peanutRangeNode.disabled = true;
        peanutNodeTwo.required = !noNode.checked;
    }
});

// const nameVAlue = formNode // dot notation

//console.log(formNode);

formNode.addEventListener('submit', function(event) { //2
    event.preventDefault();

    const applicunt = {  //3
        name: nameNode.value,
        zipCode: zipCodeNode.value, //4
        allergicScale: peanutRangeNode.value, //9
        allergicScaleTwo: peanutNodeTwo.value, //12
    };



     //console.log(formNode.elements.name.value);

    // const applicunt = {  //example
    //     name: 'NAME'
    // };

});