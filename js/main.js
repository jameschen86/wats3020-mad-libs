
let honorific = prompt('Please enter an honorific title.','Master');

let authorName = prompt('What is your full name?','John Doe');

let adjective1 = prompt('Describe something with an adjective.','odd');

let vehicle = prompt('Pick a type of vehicle.','spaceship');

let vehiclePart = prompt('Name a part from your vehicle.','hyper-truster');

let parking = prompt('Name a location for vehicle to park.','mars');

let precious = prompt('Name a previous object.','oxygen');

let noiseMaker = prompt('Name something that makes a sound.','baby');

let crowdBehavior = prompt('Name something that people do together as a group.','complain about their life');

let adjective2 = prompt('Describe something with an adjective again.','questionable');

let adjective3 = prompt('Describe something with an adjective the third time.','annoying');

let color = prompt('Name a color.','black');

let familyMember = prompt('Name a kind family relationship.','godfather');

let organ = prompt('Name a body organ.','eyeball');

let bodyPart1 = prompt('Name a bodypart.','head');

let bodyPart2 = prompt('Name another bodypart.','hand');

let bodyPart3 = prompt('Name a third bodypart.','anus');

let thing = prompt('Name an object.','computer');

let thing2 = prompt('Name an object you give to someone you love.','your heart');

let thing3 = prompt('Name an object you give to someone you like.','cookies');

let adjective4 = prompt('Name an adjective to describe your vehicle.','mysterious');

let adjective5 = prompt('Name a final adjective to describe your vehicle.','sleek');

let userNumber = prompt('Name your favorite number thats is not zero.', '8');

let number2 = userNumber + 99;

let number3 = userNumber/7;

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;