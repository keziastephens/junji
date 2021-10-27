console.log('i am linked');

let objectArray = [
    {
        id: 'ji-tomie',
        title: 'Tomie',
        image: './img/tomie.jpg',
        info: 'The manga centers on the titular character: a mysterious, beautiful woman named Tomie Kawakami, identified by her sleek black hair and a beauty mark below her left eye. Tomie acts like a succubus, possessing an undisclosed power to make anyone fall in love with her. Through her mere presence, or through psychological and emotional manipulation, she drives these people into jealous rages that often lead to brutal acts of violence. Men kill each other over her, and women are driven to insanity as well — though there are some who are strong enough to resist her. Tomie is inevitably killed time and time again, only to regenerate and spread her curse to other victims, making her effectively immortal.',
        price: '$79.99',
        release: 'old',
        popularity: 'high',
        year: '1997'
    },
    {
        id: 'ji-remina',
        title: 'Hellstar Remina',
        image: './img/remina.jpg',
        info: 'Following the discovery of a mysterious rogue planet which is on a course towards the solar system, Remina, the daughter of the scientist who discovered it, finds herself the subject of fame and adoration after her father chooses to name the planet after her. However, as it becomes clear that Remina is on a collision course with Earth, and also appears to be destroying anything in its path, this adoration turns to fear, then to homicidal madness.',
        price: '$49.99',
        release: 'old',
        popularity: 'low',
        year: '2005'
    },
    {
        id: 'ji-sensor',
        title: 'Sensor',
        image: './img/sensor.jpg',
        info: 'A woman walks alone at the foot of Mount Sengoku. A man appears, saying he’s been waiting for her, and invites her to a nearby village. Surprisingly, the village is covered in hairlike volcanic glass fibers, and all of it shines a bright gold. At night, when the villagers perform their custom of gazing up at the starry sky, countless unidentified flying objects come raining down on them, the opening act for the terror about to occur.',
        price: '$49.99',
        release: 'new',
        popularity: 'high',
        year: '2021'
    },
    {
        id: 'ji-gyo',
        title: 'Gyo',
        image: './img/gyo.jpg',
        info: 'Tadashi hopes to save the horribly mutated Kaori from a fate worse than death, but the treatment by Doctor Koyanagi may be worse than the disease. This new volume features a struggle between man and machines powered by dead flesh -- will mankind survive?',
        price: '$59.99',
        release: 'old',
        popularity: 'high',
        year: '2004'
    },
    {
        id: 'ji-foh',
        title: 'Fragments of Horror',
        image: './img/foh.jpg',
        info: 'Fragments of Horror (魔まの断片かけら, Ma no Kakera) is a Japanese horror anthology manga series written and illustrated by Junji Ito. It was serialized in Nemuki between April 2013 and February 2014 as seven separate short stories, with an eighth being added for the tankōbon release.',
        price: '$39.99',
        release: 'old',
        popularity: 'low',
        year: '2014'
    },
    {
        id: 'ji-uzumaki',
        title: 'Uzumaki',
        image: './img/uzumaki.jpg',
        info: 'Uzumaki follows a high-school teenager, Kirie, her boyfriend, Shuichi, and the citizens of a small,Japanese town, which is cursed by supernatural events involving spirals. As the story progresses, Kirie and Shuichi witness how the spiral curse affects the people around them, slowly making spirals the center of their lives. As the community begins to break down, Kirie is affected by the curse as well and her hair begins to curl into an unnatural spiral pattern, drains her life energy to hypnotize the citizens, and chokes her whenever she attempts to cut it off. The curse continues to plague the town, until a storm conjured by the curse destroys most of its structures',
        price: '$79.99',
        release: 'old',
        popularity: 'high',
        year: '2001'
    },
    {
        id: 'ji-deserter',
        title: 'Deserter',
        image: './img/deserter.jpg',
        info: 'A vengeful family hides an army deserter for eight years after the end of World War II, cocooning him in a false reality where the war never ended. A pair of girls look alike, but they’re not twins. And a boy’s nightmare threatens to spill out into the real world.',
        price: '$39.99',
        release: 'new',
        popularity: 'low',
        year: '2021'
    },
    {
        id: 'ji-frankenstein',
        title: 'Frankenstein',
        image: './img/frankenstein.jpg',
        info: 'Junji Ito meets a classic story! The master of horror manga bends all his skill into bringing the anguished and solitary monster — and the fouler beast who created him — to life with the brilliantly detailed chiaroscuro for which he is known.',
        price: '$59.99',
        release: 'new',
        popularity: 'high',
        year: '2018'
    },
    {
        id: 'ji-dc',
        title: 'Dissolving Classroom',
        image: './img/dissolving.jpg',
        info: 'A pair of twisted siblings-Yuuma, a young man obsessed with the devil, and Chizumi, the worst little sister in recorded history-cause all sorts of tragic and terrifying things to happen wherever they go. These scary short stories will shock you with a literal interpretation of the ills that plague modern society.',
        price: '$39.99',
        release: 'old',
        popularity: 'high',
        year: '2014'
    },
    {
        id: 'ji-shiver',
        title: 'Shiver',
        image: './img/shiver.jpg',
        info: 'An arm peppered with tiny holes dangles from a sick girl’s window... After an idol hangs herself, balloons bearing the faces of their destined victims appear in the sky... An amateur film crew hires an extremely individualistic fashion model and faces a real bloody ending...',
        price: '$45.99',
        release: 'old',
        popularity: 'high',
        year: '2015'
    },
    {
        id: 'ji-lovesickness',
        title: 'Lovesickness',
        image: './img/lovesickness.jpg',
        info: 'Ryusuke returns to the town he once lived in because rumors are swirling about girls killing themselves after encountering a bewitchingly handsome young man. Harboring his own secret from time spent in this town, Ryusuke attempts to capture the beautiful boy and close the case, but a lot of things go down...',
        price: '$35.99',
        release: 'new',
        popularity: 'low',
        year: '2021'
    },
    {
        id: 'ji-smashed',
        title: 'Smashed',
        image: './img/smashed.jpg',
        info: 'Try not to be noticed when you eat the secret nectar, otherwise you’ll get smashed... What horrific events happened to create the earthbound—people tied to a certain place for the rest of their short lives? Then, a strange haunted house comes to town, but no one expects it to lead to a real hell...',
        price: '$45.99',
        release: 'new',
        popularity: 'high',
        year: '2019'
    },
    {
        id: 'ji-venus',
        title: 'Venus in the Blind Spot',
        image: './img/venus.jpg',
        info: 'This striking collection presents the most remarkable short works of Junji Ito’s career, featuring an adaptation of Rampo Edogawa’s classic horror story “Human Chair” and fan favorite “The Enigma of Amigara Fault.”',
        price: '$39.99',
        release: 'new',
        popularity: 'high',
        year: '2020'
    },
    {
        id: 'ji-blackparadox',
        title: 'Black Paradox',
        image: './img/black.jpg',
        info: 'Black Paradox is a multi-chapter manga written by Junji Ito. It follows four people who meet for a group suicide, but their attempt to die instead makes them aware of a bizarre phenomenon that could change the world.',
        price: '$29.99',
        release: 'old',
        popularity: 'low',
        year: '2009'
    },
    {
        id: 'ji-fleshcolored',
        title: 'Flesh-Colored Horror',
        image: './img/flesh.jpg',
        info: 'Flesh-Colored Horror is a single-volume horror manga written and illustrated by Junji Ito. It is listed as the third volume in the Junji Ito Horror Comic Collection and published by ComicsOne.',
        price: '$19.99',
        release: 'old',
        popularity: 'low',
        year: '2001'
    }
];

// end of object array


// start of modal

function modal(){

    $('.btn-primary').click(function(){
        let i = 0;
        for(i = 0; i < objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                $('#staticBackdropLabel').empty().append(
                    `
                    <h5>${objectArray[i].title}</h5>
                    `
                );
                $('#modalBody').empty().append(
                    `
                    <img class = "objectArrayModalImage" src="${objectArray[i].photo}" alt=""></img>

                    `
                )
            };
        };
    });

};








//start of card function

function objectArrayCards(){

    let i = 0;
    for(i = 0; i < objectArray.length; i++){
        $('#cardContent').append(
            `
            <div class="card" style="width: 18rem;">
                <img src="${objectArray[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${objectArray[i].title}</h5>

                    <p class="card-text">${objectArray[i].price}</p>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    See More
                    </button>
                </div>
            </div>
            `
        )
    }
}

objectArrayCards();