
// MAIN MENU NAVIGATION ##########################################################################
const menuBttn = document.getElementById('burger-menu');
const asideNav = document.getElementById('aside-nav');
const searchBar = document.getElementsByClassName('search-container');

const header = document.getElementsByTagName('header');
const breadcrumb = document.getElementsByClassName('breadcrumb-container');
const content = document.getElementsByClassName('content');

function displayAsideMenu(){

    // Change menu form cross-burger
    menuBttn.classList.toggle('changeMenuForm');

    // Slide in-out aside nav
    asideNav.classList.toggle('slide-out');

    // Change search-bar form
    searchBar[0].classList.toggle('search-menu-active');

    // Hidde breadcrumb & categories tags
    breadcrumb[0].classList.toggle('hidden');
    content[0].classList.toggle('hidden');
    header[0].classList.toggle('expand');

}
// Menu button on click animations
menuBttn.addEventListener('click', displayAsideMenu); 

// Searchbar onclick display aside menu
searchBar[0].addEventListener('click', displayAsideMenu); 


// DYNIMIC STEPS CONTENT NAVIGATION ##############################################################
const stepIndex = document.getElementById('stepIndex')
const continueBttn = document.getElementById('continueBttn');
const backBttn = document.getElementById('backBttn');

const stepTitle = document.getElementById('stepTitle');
const stepIndicator = document.getElementById('stepIndicator');
const stepContent1 = document.getElementById('stepContent-1');
const stepContent2 = document.getElementById('stepContent-2');
const stepContent3 = document.getElementById('stepContent-3');
const stepContent4 = document.getElementById('stepContent-4');
const stepContent5 = document.getElementById('stepContent-5');
const stepContent6 = document.getElementById('stepContent-6');
const step6SendBttn = document.getElementById('step6SendBttn');


function controlStep(direction){

    console.log(direction+' '+stepIndex.value);
    
    var index = stepIndex.value;

    /* Colors
        primary-variant = #986af9
        primary-dark    = #0c0b26
    */

    /* Steps titles
        1. Start fundrising
        2. Requeriments
        3. Apply for support
        4. Proposal approval
        5. Communicate to the world
        6. Receive the funds
    */

    // Step-1 to step-2 (only continue)
    if(index == 1){
        
        if(direction == 'continue'){

            stepTitle.textContent = 'Requeriments';

            // step num 1
            stepIndicator.children[0].style.backgroundColor = '#fff';
            stepIndicator.children[0].style.color = '#0c0b26';
            stepIndicator.children[0].style.borderColor = '#0c0b26';

            // step num 2
            stepIndicator.children[1].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[1].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[1].style.color = '#fff'; // white

            stepContent1.classList.add('hidden-none');
            stepContent2.classList.remove('hidden-none');
            backBttn.classList.remove('hidden');

            stepIndex.value = 2;
        }
    }
    // Step-2 to step-3 or step-1
    else if(index == 2){

        if(direction == 'continue'){

            stepTitle.textContent = 'Apply for support';

            // step indicator num 2
            stepIndicator.children[1].style.backgroundColor = '#fff'; // white
            stepIndicator.children[1].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[1].style.color = '#0c0b26'; // primary-dark
            // step indicator num 3
            stepIndicator.children[2].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[2].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[2].style.color = '#fff'; // white

            stepContent2.classList.add('hidden-none');
            stepContent3.classList.remove('hidden-none');

            stepIndex.value = 3;
        }
        else if(direction == 'back'){

            stepTitle.textContent = 'Start fundrising';

            // step indicator num 2
            stepIndicator.children[1].style.backgroundColor = '#fff'; // white
            stepIndicator.children[1].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[1].style.color = '#0c0b26'; // primary-dark

            // step indicator num 1
            stepIndicator.children[0].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[0].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[0].style.color = '#fff'; // white

            stepContent1.classList.remove('hidden-none');
            stepContent2.classList.add('hidden-none');
            backBttn.classList.add('hidden');

            stepIndex.value = 1;
        }
    }
    // Step-3 to step-4 or step-2
    else if(index == 3){

        if(direction == 'continue'){

            stepTitle.textContent = 'Proposal approval';

            // step indicator num 3
            stepIndicator.children[2].style.backgroundColor = '#fff'; // white
            stepIndicator.children[2].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[2].style.color = '#0c0b26'; // primary-dark
            // step indicator num 4
            stepIndicator.children[3].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[3].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[3].style.color = '#fff'; // white

            stepContent3.classList.add('hidden-none');
            stepContent4.classList.remove('hidden-none');

            stepIndex.value = 4;
        }
        else if(direction == 'back'){

            stepTitle.textContent = 'Requeriments';

            // step indicator num 3
            stepIndicator.children[2].style.backgroundColor = '#fff'; // white
            stepIndicator.children[2].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[2].style.color = '#0c0b26'; // primary-dark

            // step indicator num 2
            stepIndicator.children[1].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[1].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[1].style.color = '#fff'; // white

            stepContent2.classList.remove('hidden-none');
            stepContent3.classList.add('hidden-none');

            stepIndex.value = 2;
        }
    }
    // Step-4 continue to step-5 or back to step-3
    else if(index == 4){

        if(direction == 'continue'){

            stepTitle.textContent = 'Communicate to the world';

            // step indicator num 4
            stepIndicator.children[3].style.backgroundColor = '#fff'; // white
            stepIndicator.children[3].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[3].style.color = '#0c0b26'; // primary-dark

            // step indicator num 5
            stepIndicator.children[4].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[4].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[4].style.color = '#fff'; // white

            stepContent4.classList.add('hidden-none');
            stepContent5.classList.remove('hidden-none');

            stepIndex.value = 5;
        }
        else if(direction == 'back'){

            stepTitle.textContent = 'Apply for support';

            // step indicator num 4
            stepIndicator.children[3].style.backgroundColor = '#fff'; // white
            stepIndicator.children[3].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[3].style.color = '#0c0b26'; // primary-dark

            // step indicator num 3
            stepIndicator.children[2].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[2].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[2].style.color = '#fff'; // white

            stepContent4.classList.add('hidden-none');
            stepContent3.classList.remove('hidden-none');

            stepIndex.value = 3;
        }
    }
    // Step-5 continue to step-6 or back to step-4
    else if(index == 5){

        if(direction == 'continue'){

            stepTitle.textContent = 'Receive the funds';

            // step indicator num 5
            stepIndicator.children[4].style.backgroundColor = '#fff'; // white
            stepIndicator.children[4].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[4].style.color = '#0c0b26'; // primary-dark

            // step indicator num 6
            stepIndicator.children[5].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[5].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[5].style.color = '#fff'; // white

            stepContent5.classList.add('hidden-none');
            stepContent6.classList.remove('hidden-none');

            continueBttn.classList.add('hidden-none');
            step6SendBttn.classList.remove('hidden-none');

            stepIndex.value = 6;
        }
        else if(direction == 'back'){

            stepTitle.textContent = 'Proposal approval';

            // step indicator num 5
            stepIndicator.children[4].style.backgroundColor = '#fff'; // white
            stepIndicator.children[4].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[4].style.color = '#0c0b26'; // primary-dark

            // step indicator num 4
            stepIndicator.children[3].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[3].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[3].style.color = '#fff'; // white

            stepContent5.classList.add('hidden-none');
            stepContent4.classList.remove('hidden-none');

            stepIndex.value = 4;
        }
    }
    // Step-6 continue to Profile > List of fundridings or back to step-5
    else if(index == 6){

        if(direction == 'continue'){

            stepTitle.textContent = 'Receive the funds';

            // step indicator num 5
            stepIndicator.children[4].style.backgroundColor = '#fff'; // white
            stepIndicator.children[4].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[4].style.color = '#0c0b26'; // primary-dark

            // step indicator num 6
            stepIndicator.children[5].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[5].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[5].style.color = '#fff'; // white

            stepContent5.classList.add('hidden-none');
            stepContent6.classList.remove('hidden-none');

            stepIndex.value = 6;
        }
        else if(direction == 'back'){

            stepTitle.textContent = 'Communicate to the world';

            // step indicator num 6
            stepIndicator.children[5].style.backgroundColor = '#fff'; // white
            stepIndicator.children[5].style.borderColor = '#0c0b26'; // primary-dark
            stepIndicator.children[5].style.color = '#0c0b26'; // primary-dark

            // step indicator num 5
            stepIndicator.children[4].style.backgroundColor = '#986af9'; // primary-variant
            stepIndicator.children[4].style.borderColor = '#986af9'; // primary-variant
            stepIndicator.children[4].style.color = '#fff'; // white

            stepContent6.classList.add('hidden-none');
            stepContent5.classList.remove('hidden-none');

            continueBttn.classList.remove('hidden-none');
            step6SendBttn.classList.add('hidden-none');

            stepIndex.value = 5;
        }
    }

    console.log(stepIndex.value);
}
        
continueBttn.addEventListener('click', ()=>{ controlStep('continue') });
backBttn.addEventListener('click', ()=>{ controlStep('back') });

window.onbeforeunload = (stepIndex.value = 1);


// STEP 3 ADD/REMOVE EMAIL TAGS
const addEmailBttn = document.getElementById('addEmailBttn');
const addEmailInput = document.getElementById('addEmailInput');
const emailTagsContainer = document.getElementsByClassName('emailTagsContainer');

var staticID = 1;

function addEmailTag(){
    var email = addEmailInput.value;

    staticID++;

    var newTagString =
        `<div class="emailTag" id="email${staticID}">
            <p>${email}</p>
            <span onclick="delEmailTag(${staticID})">
                <i class="far fa-times-circle"></i>
            </span>
        </div>`;

    var actualContent = emailTagsContainer[0].innerHTML;
    emailTagsContainer[0].innerHTML = actualContent + newTagString;

    console.log(staticID);
}

function delEmailTag(id){
    var target = document.getElementById('email'+id);
    target.parentNode.removeChild(target);
}

addEmailBttn.addEventListener('click', addEmailTag);




