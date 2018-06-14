function getProfileTemplate(person){

  var template = `

    <img src="${person.imageURL}" class="img-fluid">
    <p>${person.text}</p>
  `
  return template
}
var youth_data = {
  message_1: {
   imageURL: "https://winkgo.com/wp-content/uploads/2016/08/67-Hilarious-Teacher-Memes-38.jpg",
   text: "This is a fake SMS",
   topic: "EdSex"
  },
  message_2: {
   imageURL: "http://www.fusionyearbooks.com/wp-content/uploads/2016/03/Teacher-memes-32-giving-direction-to-students.jpg",
    text: "When I was in 1st grade, I got in trouble for something in class. I don't remember what, but it was something trivial. Her punishment was to lock me in the dark classroom during lunch so I couldn't eat. Shit was fucked up.",
   topic: ""
  },
  message_3: {
    imageURL:"https://s.hdnux.com/photos/73/11/26/15504786/3/920x920.jpg",
    text: "This is a fake SMS",
    topic: "Students bully Teacher"
  },
  message_4: {
   imageURL:"https://cdn.shopify.com/s/files/1/2562/6932/files/my-face-when-mystudents-say-something-funny-teacher-meme_grande.png?v=1517191757",
    text:"There was a class I wanted to take in college, but it was only offered once a year and conflicted once a week with another class. I sign up, and the first day of class I talk to the professor and inform him that I really want to take the class, but I will miss regularly since I will have to manage attending it and another class. He says: 'As long as you're willing to teach yourself and don't expect me to give the lecture again during office hours, I'm fine.' Then he proceeded to do things like cancel class, change assignment due dates, etc. without ever sending an email, just announcing it in class. YOU COULD HAVE JUST SAID NO, YOU JERK.",
   topic: "Bad Teacher"
  },
  message_5: {
   imageURL: "https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
   text: "My 6th grade science teacher gave me a D and said 'write more' on my science journal. I am a scientist now by trade. Never have i ever encountered anyone who said i needed more adjectives and had to 'write more'. Science is about the facts, nothing else. No one cares how you feel about shit or how it reminded you of your summer at the grand canyon.",
   topic: "Bad Teacher"
  },
  message_6: {
   imageURL:"https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
    text: "This is a fake SMS",
   topic: "EdSex"
  },
  message_7: {
   imageURL: "https://cdn.shopify.com/s/files/1/1268/2639/files/flip_that_water_bottle_grande.jpg?v=1481987982",
   text: "This is a fake SMS",
   topic: "EdSex"
  },
  message_8: {
      imageURL: "https://cdn.shopify.com/s/files/1/1268/2639/files/flip_that_water_bottle_grande.jpg?v=1481987982",
   text: "A 'geography teacher' I had in high school who was primarily a football coach that was forced to teach too. All we did was color maps. This is what going to high school in small town Texas is like. ",
   topic: "bad teacher"
  },
  message_9: {
   imageURL: "https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
   text: "In 7th grade I had a special education teacher that made students cry on a regular basis; I was one of those students.She used to tell me that I would never succeed in life, that I would end up living with my parents and working at a fast-food restaurant for the rest of my life. I have asperges and a learning disability in reading in writing and she belittled me for it! Her job is to support students not bully them like everyone else. The two years I had her as a teacher were some of the the worst years of my life.",
   topic: "Bad Teacher"
  },
  message10: {
   text: "I have to list two. My Year 2 teacher who wouldn't believe that I'd hurt my arm at recess and was trying to get out work. I was a reserved and obedient child (thanks to heavy-handed parenting) who had never tried to skive off. Returning to school the next day with a cast on my broken arm was also treated with the same lack of concern. And then there was my Year 5 teacher who took an intense dislike to me (for reasons I have never discovered), and would punish me for the most minor of infractions (eg: handwriting not perfect), and would keep me back at recess/lunch to verbally abuse me. Added to this was the knowledge that my mum would never do anything to intervene, she would've blamed me for it. So I got to endure 12 months of bullying from an adult ( I was 10). On the plus side, he later developed bowel cancer and really lingered through it.",
   topic: "EdSex"
  },
  message_11: {
   imageURL: "https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
   text: "I have to list two. My Year 2 teacher who wouldn't believe that I'd hurt my arm at recess and was trying to get out work. I was a reserved and obedient child (thanks to heavy-handed parenting) who had never tried to skive off. Returning to school the next day with a cast on my broken arm was also treated with the same lack of concern. And then there was my Year 5 teacher who took an intense dislike to me (for reasons I have never discovered), and would punish me for the most minor of infractions (eg: handwriting not perfect), and would keep me back at recess/lunch to verbally abuse me. Added to this was the knowledge that my mum would never do anything to intervene, she would've blamed me for it. So I got to endure 12 months of bullying from an adult ( I was 10). On the plus side, he later developed bowel cancer and really lingered through it.",
   topic: "EdSex"
  },
  message_12: {
   text: "I don't remember her name, but I do remember multiple times she was wildly inappropriate and just and asshole. I was in second grade, and my grandpa had just died. I ended up missing school because of the funeral and as a result I missed the spelling test that day. The day I got back she told me 'Next time someone dies you better have the damn funeral on the weekend'. It was in a snobby nasty school district / town that never admitted they did anything wrong, but needless to say Im glad we got the fuck out of there. :) ",
   topic: ""
  },
  message_13: {
   imageURL: "https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
   text: "This is a fake SMS",
   topic: "EdSex"
  },
  message_14: {

   text: "This is a fake SMS",
   topic: "EdSex"
  },
  message_15: {
   imageURL: "https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
   text: "This is a fake SMS",
   topic: "EdSex"
  },
  message_16: {
   text: "This is a fake SMS",
   topic: "EdSex"
  },
  message_17: {
   imageURL: "https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
   text: "This is a fake SMS",
   topic: "EdSex"
  },
message_18: {

   text: "This is a fake SMS",
   topic: "EdSex"
  },
message_19: {
   imageURL: "https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2018/04/04112957/Celeste-Aguilar.jpg",
   text: "This is a fake SMS",
   topic: "EdSex"
  },
message_20: {
   text: "This is a fake SMS",
   topic: "EdSex",
   audioUrl: "audio.mp3"
  }
}
document.querySelector("#message-1").innerHTML = getProfileTemplate( youth_data.message_1 )
document.querySelector("#message-2").innerHTML = getProfileTemplate( youth_data.message_2 )
document.querySelector("#message-3").innerHTML = getProfileTemplate( youth_data.message_3 )

var currentPage = 0
function goPrev (){
  document.querySelector("#message-1").innerHTML = getProfileTemplate( youth_data.message_1 )
  document.querySelector("#message-2").innerHTML = getProfileTemplate( youth_data.message_2 )
  document.querySelector("#message-3").innerHTML = getProfileTemplate( youth_data.message_3 )

 currentPage = currentPage - 1
}

function goNext(){
  document.querySelector("#message-1").innerHTML = getProfileTemplate( youth_data.message_4 )
  document.querySelector("#message-2").innerHTML = getProfileTemplate( youth_data.message_5 )
  document.querySelector("#message-3").innerHTML = getProfileTemplate( youth_data.message_6 )

currentPage = currentPage + 1;
}
var likes = 0;
var icon = document.getElementById('icon');
var counter = document.getElementById('counter');

function updateLikes() {
  if (icon.dataset.like === "false") {
    likes = likes + 1;
    icon.src = "images/fill.png";
    counter.innerHTML = likes;
    icon.dataset.like = "true"

  } else {
    likes = likes - 1;
    icon.dataset.like = "false"
    icon.src = "images/empty.png";
    counter.innerHTML = likes;
  }
}
