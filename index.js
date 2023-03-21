const dogBtn = document.getElementById('dog-search');
const imageEl = document.getElementById('img_container');
const dogImageEl = document.getElementById('dog-image');
const factBtn = document.querySelector('.fact-btn');
const factEl = document.getElementById('fact-box')

const dogFacts = [
  {
    fact: 'The Labrador Retriever has been on the AKC’s top 10 most popular breeds list for 30 consecutive years—longer than any other breed.',
  },
  {
    fact: 'A dog’s nose print is unique, much like a person’s fingerprint.',
  },
  {
    fact: 'Forty-five percent of U.S. dogs sleep in their owner’s bed.',
  },
  {
    fact: 'A dog’s sense of smell is legendary, but did you know that his nose has as many as 300 million receptors? In comparison, a human nose has about 5 million.',
  },
  {
    fact: 'Yawning is contagious—even for dogs. Research shows that the sound of a human yawn can trigger one from your dog. And it’s four times as likely to happen when it’s the yawn of a person he knows.',
  },
  {
    fact: 'Dogs curl up in a ball when sleeping to protect their organs—a hold over from their days in the wild, when they were vulnerable to predator attacks.',
  },
  {
    fact: 'Human blood pressure goes down when petting a dog. And so does the dog’s.',
  },
  {
    fact: 'Dogs are not colorblind. They can see blue and yellow.',
  },
  {
    fact: 'When dogs kick backward after they go to the bathroom it’s not to cover it up, but to mark their territory, using the scent glands in their feet.',
  },
  {
    fact: 'A recent study shows that dogs are among a small group of animals who show voluntary unselfish kindness towards others without any reward. This is one fact dog lovers have known all along.',
  },
];

// console.log(dogFacts[0].fact)

// function to generate random fact





dogBtn.addEventListener('click', getDogImage);

async function getDogImage() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  const respose = await fetch(url).then((response) => {
    return response.json().then((data) => {
      dogImageEl.setAttribute('src', `${data.message}`);
    });
  });
}

function getRandomFact() {

  function randomFactIndex() {
    const factIndex = (dogFacts[Math.floor(Math.random() * dogFacts.length)])
  // console.log(factIndex.fact)
  factEl.innerHTML = factIndex.fact;
   }
   randomFactIndex()

  
}
getRandomFact()


factBtn.addEventListener('click', getRandomFact)
