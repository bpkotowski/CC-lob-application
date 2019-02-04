const formNode = document.getElementById('form-example'); //1
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code'); //3
// const nameVAlue = nameNode.value;
const peanutRangeNode = document.getElementById('peanuts'); //5
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes'); //7
const noNode = document.getElementById('no'); 


peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value; //6
});

yesNode.addEventListener('change', function() { //8
    // console.log('yes', yesNode.checked);
    if(yesNode.checked) {
        allergicNumberNode.textContent = 1;
        peanutRangeNode.min = 1;
    }
});

noNode.addEventListener('change', function() {
    // console.log('no', noNode.checked);
});

// const nameVAlue = formNode // dot notation

//console.log(formNode);

formNode.addEventListener('submit', function(event) { //2
    event.preventDefault();

    const applicunt = {  //3
        name: nameNode.value,
        zipCode: zipCodeNode.value, //4
        allergicScale: peanutRangeNode.value //9
    };



     //console.log(formNode.elements.name.value);

    // const applicunt = {  //example
    //     name: 'NAME'
    // };

});