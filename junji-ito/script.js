console.log('i am linked');
const searchFilter = document.querySelector('#searchFilter');
const yearFilter = document.querySelector("#yearFilter");
const radioFilter = document.querySelector("#radioBtn");
const refreshButton = document.querySelector("#refresh")

let objectArray = [
    {
        id: 'ji-tomie',
        title: 'Tomie',
        image: './img/tomie.jpg',
        info: 'The manga centers on the titular character: a mysterious, beautiful woman named Tomie Kawakami, identified by her sleek black hair and a beauty mark below her left eye. Tomie acts like a succubus, possessing an undisclosed power to make anyone fall in love with her. Through her mere presence, or through psychological and emotional manipulation, she drives these people into jealous rages that often lead to brutal acts of violence. Men kill each other over her, and women are driven to insanity as well — though there are some who are strong enough to resist her. Tomie is inevitably killed time and time again, only to regenerate and spread her curse to other victims, making her effectively immortal.',
        price: '$79.99',
        release: 'old',
        popularity: 'high',
        date: '1997',
        year: 'nineties',
        tags: ['tomie', 'tome']
    },
    {
        id: 'ji-remina',
        title: 'Hellstar Remina',
        image: './img/remina.jpg',
        info: 'Following the discovery of a mysterious rogue planet which is on a course towards the solar system, Remina, the daughter of the scientist who discovered it, finds herself the subject of fame and adoration after her father chooses to name the planet after her. However, as it becomes clear that Remina is on a collision course with Earth, and also appears to be destroying anything in its path, this adoration turns to fear, then to homicidal madness.',
        price: '$49.99',
        release: 'old',
        popularity: 'low',
        date: '2005',
        year: 'thousands',
        tags: ['remina', 'hellstar', 'hellstar remina']
    },
    {
        id: 'ji-sensor',
        title: 'Sensor',
        image: './img/sensor.jpg',
        info: 'A woman walks alone at the foot of Mount Sengoku. A man appears, saying he’s been waiting for her, and invites her to a nearby village. Surprisingly, the village is covered in hairlike volcanic glass fibers, and all of it shines a bright gold. At night, when the villagers perform their custom of gazing up at the starry sky, countless unidentified flying objects come raining down on them, the opening act for the terror about to occur.',
        price: '$49.99',
        release: 'new',
        popularity: 'high',
        date: '2021',
        year: 'twenties',
        tags: ['sensor', 'sense']
    },
    {
        id: 'ji-gyo',
        title: 'Gyo',
        image: './img/gyo.jpg',
        info: 'Tadashi hopes to save the horribly mutated Kaori from a fate worse than death, but the treatment by Doctor Koyanagi may be worse than the disease. This new volume features a struggle between man and machines powered by dead flesh -- will mankind survive?',
        price: '$59.99',
        release: 'old',
        popularity: 'high',
        date: '2004',
        year: 'thousands',
        tags: ['gyo', 'gy']
    },
    {
        id: 'ji-foh',
        title: 'Fragments of Horror',
        image: './img/foh.jpg',
        info: 'Fragments of Horror (魔まの断片かけら, Ma no Kakera) is a Japanese horror anthology manga series written and illustrated by Junji Ito. It was serialized in Nemuki between April 2013 and February 2014 as seven separate short stories, with an eighth being added for the tankōbon release.',
        price: '$39.99',
        release: 'old',
        popularity: 'low',
        date: '2014',
        year: 'tens',
        tags: ['fragments', 'horror', 'fragments of horror', 'fragments of']
    },
    {
        id: 'ji-uzumaki',
        title: 'Uzumaki',
        image: './img/uzumaki.jpg',
        info: 'Uzumaki follows a high-school teenager, Kirie, her boyfriend, Shuichi, and the citizens of a small,Japanese town, which is cursed by supernatural events involving spirals. As the story progresses, Kirie and Shuichi witness how the spiral curse affects the people around them, slowly making spirals the center of their lives. As the community begins to break down, Kirie is affected by the curse as well and her hair begins to curl into an unnatural spiral pattern, drains her life energy to hypnotize the citizens, and chokes her whenever she attempts to cut it off. The curse continues to plague the town, until a storm conjured by the curse destroys most of its structures',
        price: '$79.99',
        release: 'old',
        popularity: 'high',
        date: '2001',
        year: 'thousands',
        tags: ['uzumaki', 'uzamaki']
    },
    {
        id: 'ji-deserter',
        title: 'Deserter',
        image: './img/deserter.jpg',
        info: 'A vengeful family hides an army deserter for eight years after the end of World War II, cocooning him in a false reality where the war never ended. A pair of girls look alike, but they’re not twins. And a boy’s nightmare threatens to spill out into the real world.',
        price: '$39.99',
        release: 'new',
        popularity: 'low',
        date: '2021',
        year: 'twenties',
        tags: ['deserter', 'desert']
    },
    {
        id: 'ji-frankenstein',
        title: 'Frankenstein',
        image: './img/frankenstein.jpg',
        info: 'Junji Ito meets a classic story! The master of horror manga bends all his skill into bringing the anguished and solitary monster — and the fouler beast who created him — to life with the brilliantly detailed chiaroscuro for which he is known.',
        price: '$59.99',
        release: 'new',
        popularity: 'high',
        date: '2018',
        year: 'tens',
        tags: ['franken', 'frankenstein', 'frank']
    },
    {
        id: 'ji-dc',
        title: 'Dissolving Classroom',
        image: './img/dissolving.jpg',
        info: 'A pair of twisted siblings-Yuuma, a young man obsessed with the devil, and Chizumi, the worst little sister in recorded history-cause all sorts of tragic and terrifying things to happen wherever they go. These scary short stories will shock you with a literal interpretation of the ills that plague modern society.',
        price: '$39.99',
        release: 'old',
        popularity: 'high',
        date: '2014',
        year: 'tens',
        tags: ['classroom', 'dissolving classroom', 'dissolving']
    },
    {
        id: 'ji-shiver',
        title: 'Shiver',
        image: './img/shiver.jpg',
        info: 'An arm peppered with tiny holes dangles from a sick girl’s window... After an idol hangs herself, balloons bearing the faces of their destined victims appear in the sky... An amateur film crew hires an extremely individualistic fashion model and faces a real bloody ending...',
        price: '$45.99',
        release: 'old',
        popularity: 'high',
        date: '2015',
        year: 'tens',
        tags: ['shiver', 'shivering']
    },
    {
        id: 'ji-lovesick',
        title: 'Lovesick Dead',
        image: './img/lovesickdead.jpg',
        info: 'Ryusuke returns to the town he once lived in because rumors are swirling about girls killing themselves after encountering a bewitchingly handsome young man. Harboring his own secret from time spent in this town, Ryusuke attempts to capture the beautiful boy and close the case, but a lot of things go down...',
        price: '$35.99',
        release: 'old',
        popularity: 'low',
        date: '1996',
        year: 'nineties',
        tags: ['lovesick dead', 'lovesick', 'love', 'dead']
    },    
    {
        id: 'ji-nolongerhuman',
        title: 'No Longer Human',
        image: './img/human.jpg',
        info: 'Plagued by a maddening anxiety, the terrible disconnect between his own concept of happiness and the joy of the rest of the world, Yozo Oba plays the clown in his dissolute life, holding up a mask for those around him as he spirals ever downward, locked arm-in-arm with death.',
        price: '$79.99',
        release: 'new',
        popularity: 'high',
        date: '2019',
        year: 'tens',
        tags: ['human', 'no longer human', 'no longer', 'no', 'longer']
    },
    {
        id: 'ji-smashed',
        title: 'Smashed',
        image: './img/smashed.jpg',
        info: 'Try not to be noticed when you eat the secret nectar, otherwise you’ll get smashed... What horrific events happened to create the earthbound—people tied to a certain place for the rest of their short lives? Then, a strange haunted house comes to town, but no one expects it to lead to a real hell...',
        price: '$45.99',
        release: 'new',
        popularity: 'high',
        date: '2019',
        year: 'tens',
        tags: ['smashed', 'smash']
    },
    {
        id: 'ji-venus',
        title: 'Venus in the Blind Spot',
        image: './img/venus.jpg',
        info: 'This striking collection presents the most remarkable short works of Junji Ito’s career, featuring an adaptation of Rampo Edogawa’s classic horror story “Human Chair” and fan favorite “The Enigma of Amigara Fault.”',
        price: '$39.99',
        release: 'new',
        popularity: 'high',
        date: '2020',
        year: 'twenties',
        tags: ['venus', 'venus in', 'venus in the', 'venus in the blindspot']
    },
    {
        id: 'ji-blackparadox',
        title: 'Black Paradox',
        image: './img/black.jpg',
        info: 'Black Paradox is a multi-chapter manga written by Junji Ito. It follows four people who meet for a group suicide, but their attempt to die instead makes them aware of a bizarre phenomenon that could change the world.',
        price: '$29.99',
        release: 'old',
        popularity: 'low',
        date: '2009',
        year: 'thousands',
        tags: ['black', 'paradox', 'black paradox']
    },
    {
        id: 'ji-fleshcolored',
        title: 'Flesh-Colored Horror',
        image: './img/flesh.jpg',
        info: 'Flesh-Colored Horror is a single-volume horror manga written and illustrated by Junji Ito. It is listed as the third volume in the Junji Ito Horror Comic Collection and published by ComicsOne.',
        price: '$19.99',
        release: 'old',
        popularity: 'low',
        date: '2001',
        year: 'thousands',
        tags: ['flesh', 'horror', 'colored', 'flesh colored horror']
    },
    {
        id: 'ji-twisted',
        title: 'The Art of Junji Ito: Twisted Visions',
        image: './img/twistedvisions.jpg',
        info: 'A first-ever collection of Junji Ito’s artworks, featuring over 130 images from his bestselling manga titles along with rare works. This sublime collection includes all of Ito’s unforgettable illustrations in both black-and-white and color, from Tomie’s dreadful beauty to the inhuman spirals of Uzumaki. Includes an interview focused on Ito’s art technique as well as commentary from the artist on each work.',
        price: '$59.99',
        release: 'new',
        popularity: 'high',
        date: '2020',
        year: 'twenties',
        tags: ['twisted visions', 'twisted', 'visions', 'art of junji ito', 'art', 'junji ito']
    },
    {
        id: 'ji-souichi',
        title: 'Souichis Diary of Curses',
        image: './img/souichi.jpg',
        info: 'Souichi is a troublemaking 5th grader. He was raised primarily by his grandmother, and is the black sheep of his family. Due to a lack of iron in his blood, he sucks on nails and holds them in his mouth. He also has the ability to shoot them out of his mouth like darts. He causes a lot of trouble with his friends and family and dabbles in voodoo.',
        price: '$29.99',
        release: 'old',
        popularity: 'low',
        date: '1996',
        year: 'nineties',
        tags: ['souichi', 'curses', 'souichis diary of curses', 'diary of curses', 'diary', 'diary of curses']
    },

];

// end of object array


// start of modal

function modal(){

    $('.book-button').click(function(){
        let i = 0;
        for(i = 0; i < objectArray.length; i++){
            if((this.id) == objectArray[i].id){
                $('#modalHeader').empty().append(
                    `
                    <h3 class="modal-header__title">${objectArray[i].title}</h3>
                    <h4>${objectArray[i].price}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    `
                );

                $('#objectArrayModalInfo').empty().append(
                    `
                    <img class = "objectArrayModalImage" id="modalPhoto" src="${objectArray[i].image}" alt="">
                    <br><br>
                    <p class="modal-paragraph" id="modalParagraph">${objectArray[i].info}</p>
                    `
                );

            };
        };
    });


    
};

modal();

// end of modal






//start of card function

function objectArrayCards(){

    let i = 0;
    for(i = 0; i < objectArray.length; i++){
        generateCard(i);
        // $('#cardContent').append(
        //     `
        //     <div class="card" style="width: 18rem;">
        //         <img src="${objectArray[i].image}" class="card-img-top" alt="...">
        //         <div class="card-body">
        //             <h5 class="card-title">${objectArray[i].title}</h5>

        //             <p class="card-text">${objectArray[i].price}</p>

        //             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        //             See More
        //             </button>
        //         </div>
        //     </div>
        //     `
        // );
    }

    modal();
}

objectArrayCards();


// ------------------------------
// start of genre filter function

function filterYear(event){
    $('#cardContent').empty();
    event.preventDefault();
    let selectedYears = [];
    // start of value check
    console.log(selectedYears);
    $('input[name="year"]:checked').each( function(){
        selectedYears.push(this.value);
        
    });
    console.log(selectedYears);
    // end of value check
    let i = 0;
    // start of selected year loop
    for(i = 0; i < selectedYears.length; i++){

        if(selectedYears[i] === "nineties"){
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                // start of if statement
                // check to see if the year is equal
                if(objectArray[i].year === "nineties"){
                    generateCard(i);
                }
            }
        }

        if(selectedYears[i] === "thousands"){
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                // start of if statement
                // check to see if the year is equal
                if(objectArray[i].year === "thousands"){
                    generateCard(i);
                }
            }
        }

        if(selectedYears[i] === "tens"){
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                // start of if statement
                // check to see if the year is equal
                if(objectArray[i].year === "tens"){
                    generateCard(i);
                }
            }
        }

        if(selectedYears[i] === "twenties"){
            let i = 0;
            for(i = 0; i < objectArray.length; i++){
                // start of if statement
                // check to see if the year is equal
                if(objectArray[i].year === "twenties"){
                    generateCard(i);
                }
            }
        }
    }
    if(selectedYears < 1){
        noInput();
    };
    modal();
};

// end of genre filter function
// ------------------------------





// -------------------------------
// start of radio search function

function radioSearch(event){
    $('#cardContent').empty();
    event.preventDefault();

    let popularity = document.querySelector('input[name="popularity"]:checked').value
    console.log(popularity);

    let i = 0;
    for(i = 0; i < objectArray.length; i++){
        if(popularity === objectArray[i].popularity)
        {
            $('#cardContent').append(
                `
                <div class="card" style="width: 18rem;">
                    <img src="${objectArray[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${objectArray[i].title}</h5>
                        <p class="card-date">${objectArray[x].date}</p>
        
                        <p class="card-text">${objectArray[x].price}</p>
        
                        <button id=${objectArray[x].id} type="button" class="btn btn-primary book-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        See More
                        </button>
                    </div>
                </div>
                `
            )
        };
    };

    
    let release = document.querySelector('input[name="popularity"]:checked').value

    for(i = 0; i < objectArray.length; i++){
        if(release === objectArray[i].release)
        {
            $('#cardContent').append(
                `
                <div class="card" style="width: 18rem;">
                    <img src="${objectArray[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${objectArray[i].title}</h5>
                        <p class="card-date">${objectArray[i].date}</p>
        
                        <p class="card-text">${objectArray[i].price}</p>
        
                        <button id=${objectArray[i].id} type="button" class="btn btn-primary book-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        See More
                        </button>
                    </div>
                </div>
                `
            )
        };
    };

    // let selectedPopularity = [];
    // $('input[name="popularity"]:checked').each(function(){
    //     selectedPopularity.push(this.value);
    // });
    // console.log(selectedPopularity)
    // // end of value check

        
    // $('#cardContent').empty();
    // event.preventDefault();
    // let selectedRelease = [];
    // $('input[name="release"]:checked').each(function(){
    //     selectedRelease.push(this.value);
    // });
    // console.log(selectedRelease)
    // // end of value check

    modal(); 
};



// end of radio search function
// -------------------------------









// -------------------------------
// start of alphabetical sort

$('#sortBtn').change(function(){
    let sortValue = ($('#sortBtn').val()).toLowerCase();
    console.log(sortValue);
    if((sortValue === 'title') || (sortValue === 'date') || (sortValue === 'price')){
        sortByAscending(sortValue);
    }
});

function sortByAscending(sortOrder){

        console.log(sortOrder);

        objectArray.sort(function(a,b){

            switch(sortOrder){
                case 'title':
                  var itemA = a.title.toLowerCase(), itemB = b.title.toLowerCase();
                    break;
                case 'date':
                    console.log('date');
                    var itemA = a.date.toLowerCase(), itemB = b.date.toLowerCase();
                    break;
                case 'price':
                    console.log('price');
                    var itemA = a.price.toLowerCase(), itemB = b.price.toLowerCase();
                    break;
                default:
                    console.log('not matching');
            };

            if(itemA < itemB){
                return -1;
                // false
            }
            if(itemA > itemB){
                return 1;
                // true
            }
        });

        console.log(objectArray);
        allCards();
        modal();
};
    

$('#refresh').click(function(){
    console.log('#refresh')
$('#cardContent').empty();
    // $('input[type=checkbox]').prop('checked',false);
allCards();
});

function allCards(){
    $('#cardContent').empty();
    for(let i =0; i <objectArray.length; i++){
        console.log(objectArray[i].title)

        generateCard(i);
    }
};


// end of alphabetical sort
// -------------------------------









// ---------------------------
// start of search function


function filterSearchWord(){

    // the prop() method sets or returns properties and values of selected elements
    $('input[type=checkbox]').prop('checked', false);
    console.log('clicked');
    let searchWord = $('#searchWord').val();
    console.log(searchWord);
    filterByWord(searchWord);
    $('input[name=search]').val('');

    modal();
};
let word = searchWord;

function filterByWord(word){
    console.log(word);
    $('#cardContent').empty();
    let i,j;
    for(i =0; i<objectArray.length; i++){
        for(j = 0; j<objectArray[i].tags.length; j++){
            // the toLowerCase() function turns string characters to lower case
            if(word.toLowerCase() === objectArray[i].tags[j]){
                generateCard(i);
                modal();
            }
        }
    };
    if(word === ''){
        noInput();
    };
    modal();
};

function noInput(){
    for(let i = 0; i < objectArray.length; i++){
        generateCard(i);
    }
    modal();
};

// end of search function
// ---------------------------






//-----------------------------
// start of card generator

function generateCard(x){
    $('#cardContent').append(
        `
        <div class="card" style="width: 18rem;">
            <img src="${objectArray[x].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${objectArray[x].title}</h5>
                <p class="card-date">${objectArray[x].date}</p>

                <p class="card-text">${objectArray[x].price}</p>

                <button id=${objectArray[x].id} type="button" class="btn btn-primary book-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                See More
                </button>
            </div>
        </div>
        `
    );
    modal();
};
// end of card generator
// ----------------------------







// event listeners

yearFilter.addEventListener("click", filterYear)
searchFilter.addEventListener("click", filterSearchWord)
radioFilter.addEventListener("click", radioSearch)
// refreshButton.addEventListener("click", a)