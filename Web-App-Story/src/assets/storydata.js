const data = {
    beginning: {
        title_text: "November 4th 1947, 02:00AM ",
        body_text: ["VICTIM: Sharon Livingston, female approximately 5 ft 2 with long blonde hair and blue eyes. Wearing a large blue coat and a pearl necklace.",
                    "EVIDENCE: No autopsy performed yet, but from on the scene officers fatality seemed to be derived from a deep gash on her side, of which caused excessive bleeding. The bleeding being the cause of death is supported by the crimson new flair left on her blue coat.",
                    "NOTES: The Chief is in his usual lazy mood and doesn’t want to “Waste good officers on a case that lacks importance”. Due to our leader’s familiar incompetence this case has been passed around the office like a bad cold. I mean who would waste there time on a case if they only have 1 hour to solve it? So to whoever is reading this, I guess it's up to you whether you dismiss this case or... Dig a Little Bit Deeper.",
                    ],
        option_text_1: "Dismiss",
        option_1_path: null,
        option_text_2: "Dig a Little Deeper?",
        option_2_path:"meet_the_witnesses",
    },

    meet_the_witnesses: {
        title_text: "November 4th 1947, 02:07AM",
        body_text: [
                    "WITNESSES: The first of the four witnesses is the victim's friend Nancy and the second witness is a business man named Mathew. Once again, you will only be able to speak with one of them so make sure you choose wisely.",
                    "THE FRIEND: Nancy was with Sharon when the murder took place and was the person who called us on to the scene. Nancy has no criminal record and appeared visibly distressed and unsettled. Any questioning from her will be more focused on getting more info than trying to get a confession.",
                    "THE BUSINESS MAN: Mathew was taking the train home the night of the murder and was unaware of any attack or scene at the subway station. At least that's what he claims. When being brought in for questioning the man seemed reluctant, could be due to a busy schedule or something more sinister."
                    ],
        option_text_1: "Talk to Mathew",
        option_1_path: "mathew_convo",
        option_text_2: "Talk to Nancy",
        option_2_path: "meet_nancy",
    },

    mathew_convo: {
        title_text: "November 4th 1947, 02:13AM",
        body_text: [
                    "INTERVIEW 1: The first interview is with Mathew. Mathew is an impatient business man who seems to care more about money than solving this case.",
                    "TRANSCRIPT: Mathew asks:'How long is this is going to take?', You respond:'Depends on how quickly you answer my questions.'",
                    "NOTES: Mathew seems a bit too eager to leave."
                    ],
        option_text_1: "Did you see anything Suspicious?",
        option_1_path: "mathew_clear_1",
        option_text_2: "How come a man like you, took the train?",
        option_2_path: "mathew_sus_1",
    },

    mathew_clear_1: {
        title_text: "November 4th 1947, 02:15AM",
        body_text: [
                    "TRANSCRIPT: Mathew asks:'How long is this is going to take?', You respond:'Depends on how quickly you answer my questions.'",
                    "You ask:'Did you see anything suspicious?' Mathew responds:'Not really. I was super tired and barely made it to my stop. Although...', You say:'Go on...' Mathew:'Well there was this teenager who seemed... odd.'",
                    "NOTES: Mathew seems a bit too eager to leave. This teenager seems like a possible suspect, I should probably investigate further. "
                    ],
        option_text_1: "Did he seem dangerous?",
        option_1_path: "mathew_clear_2",
        option_text_2: "Odd, how?",
        option_2_path: "mathew_teen_1",   
    },

    mathew_teen_1: {
        title_text: "November 4th 1947, 02:23AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did you see anything suspicious?' Mathew responds:'Not really. I was super tired and barely made it to my stop. Although...', You say:'Go on...' Mathew:'Well there was this teenager who seemed... odd.'",
                    "You ask:'Odd, how?', Mathew responds:'Well he was running away but he seemed more scared. Whether that is because he had commited a crime or witnessed it, I am not sure.' You respond:'Thank you Mathew, that will be all for now.'",
                    "NOTES: Mathew seems a bit too eager to leave. This teenager seems like a possible suspect, I should probably investigate further. "
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Mathew",
        option_2_path: "new_witnesses",
    },

    mathew_clear_2: {
        title_text: "November 4th 1947, 02:19AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did you see anything suspicious?' Mathew responds:'Not really. I was super tired and barely made it to my stop. Although...', You say:'Go on...' Mathew:'Well there was this teenager who seemed... odd.'",
                    "You ask:'Did he seem dangerous?' Mathew responds:'Well... now that I think about it he was running away from the station. He seemed flustered like he was running from something.'",
                    "NOTES: Mathew seems a bit too eager to leave. This teenager seems like a possible suspect, I should probably investigate further. This teenager could've been fleeing a crime he commited."
                    ],
        option_text_1: "Did he appear armed?",
        option_1_path: "mathew_clear_3",
        option_text_2: "Do you think he did it?",
        option_2_path: "mathew_teen_2",   
    },

    mathew_teen_2: {
        title_text: "November 4th 1947, 02:19AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did you see anything suspicious?' Mathew responds:'Not really. I was super tired and barely made it to my stop. Although...', You say:'Go on...' Mathew:'Well there was this teenager who seemed... odd.'",
                    "You ask:'Do you think he did it?' Mathew responds:'Well obviously I have no further proof, but I would say he definitely doesn't seem innocent.' You respond:'Thank you Mathew, that will be all for now.'",
                    "NOTES: Mathew seems a bit too eager to leave. This teenager seems like a possible suspect, I should probably investigate further. This teenager could've been fleeing a crime he commited."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Mathew",
        option_2_path: "new_witnesses", 
    },

    mathew_clear_3: {
        title_text: "November 4th 1947, 02:26AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did he seem dangerous?' Mathew responds:'Well... now that I think about it he was running away from the station. He seemed flustered like he was running from something.'",
                    "You ask:'Did he appear armed?' Mathew responds:'I didn't see anything specific but he was definitely holding onto something in his hand.' You respond:'Thank you for your time Mathew.'",
                    "NOTES: Mathew seems a bit too eager to leave. This teenager seems like a possible suspect, I should probably investigate further. This teenager could've been fleeing a crime he commited. Even a small blade could've caused the gash in Sharon's side."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Mathew",
        option_2_path: "new_witnesses",   
    },

    mathew_sus_1: {
        title_text: "November 4th 1947, 02:15AM",
        body_text: [
                    "TRANSCRIPT: Mathew asks:'How long is this is going to take?', You respond:'Depends on how quickly you answer my questions.'",
                    "You ask:'How come a man like you, took the train?', Mathew responds:'It was late and the train is simply cheaper', Mathew then asks:'Is this gonna last much longer, because I really need to get going?'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers."
                    ],
        option_text_1: "Can you prove you took the train?",
        option_1_path: "mathew_sus_2",
        option_text_2: "Where do you need to be so badly?",
        option_2_path: "mathew_less_sus_1",   
    },
    
    mathew_less_sus_1: {
        title_text: "November 4th 1947, 02:19AM",
        body_text: [
                    "TRANSCRIPT: You ask:'How come a man like you, took the train?', Mathew responds:'It was late and the train is simply cheaper', Mathew then asks:'Is this gonna last much longer, because I really need to get going?'",
                    "You ask:'Where do you need to be so badly?', Mathew responds:'(sighs) If I am being completely honest, I have to go out looking for a job.'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew mentioned before he was on his way home from work that night. He must have lied." 
                    ],
        option_text_1: "What happened to your job?",
        option_1_path: "mathew_less_sus_2",
        option_text_2: "Why did you lie?",
        option_2_path: "mathew_more_sus_1",   
    },

    mathew_less_sus_2: {        
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Where do you need to be so badly?', Mathew responds:'(sighs) If I am being completely honest, I have to go out looking for a job.'",
                    "You ask:'What happend to your job?', Mathew responds:'The night of the murder I was fired. That's why I took the train home. Please, I really need to go get a job or my wife is gonna kill me'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew mentioned before he was on his way home from work that night. He must have lied. Mathew's pleading seems genuine I guess we should leave him be now."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Mathew",
        option_2_path: "new_witnesses",   
    },

    mathew_more_sus_1: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Where do you need to be so badly?', Mathew responds:'(sighs) If I am being completely honest, I have to go out looking for a job.'",
                    "You ask:'Why did you lie?', Mathew responds(flustered):'Well... I didn't mean to lie... I was simply embarrased.', Mathew then blurted out:'Wait! I am not here because you think I am responsible for the girls death', Mathew finally said:'Well I uh... I won't answer anymore questions without a lawyer present!'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew mentioned before he was on his way home from work that night. He must have lied. Mathew seems frustrated to be considered a suspect. Mathew will not be questioned further, increasing my suspicions."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Mathew",
        option_2_path: "new_witnesses",
    },

    mathew_sus_2: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'How come a man like you, took the train?', Mathew responds:'It was late and the train is simply cheaper', Mathew then asks:'Is this gonna last much longer, because I really need to get going?'",
                    "You ask:'Can you prove you took the train?', Mathew responds(flustered):'Well... not exactly. I mean who would keep a train ticket?', Mathew then asks:'Wait! You don't seriously believe I had something to do with this do you?'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew seems frustrated to be considered a suspect."
                    ],
        option_text_1: "Well did you?",
        option_1_path: "mathew_sus_3",
        option_text_2: "I am simply asking questions",
        option_2_path: "mathew_sus_4", 
    },

    mathew_sus_3: {
        title_text: "November 4th 1947, 02:26AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Can you prove you took the train?', Mathew responds(flustered):'Well... not exactly. I mean who would keep a train ticket?', Mathew then asks:'Wait! You don't seriously believe I had something to do with this do you?'",
                    "You ask:'Well did you?', Mathew retorts:'This is absurd... I mean how could you... I won't go any further without my lawyer present!'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew seems frustrated to be considered a suspect. Mathew will not be questioned further, increasing my suspicions."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Mathew",
        option_2_path: "new_witnesses", 
    },

    mathew_sus_4: {
        title_text: "November 4th 1947, 02:26AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Can you prove you took the train?', Mathew responds(flustered):'Well... not exactly. I mean who would keep a train ticket?', Mathew then asks:'Wait! You don't seriously believe I had something to do with this do you?'",
                    "You say:'I am simply asking questions.', Mathew retorts:'This is absurd... I mean how could you... I won't go any further without my lawyer present!'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew seems frustrated to be considered a suspect. Mathew will not be questioned further, increasing my suspicions."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Mathew",
        option_2_path: "new_witnesses", 
    },

    meet_nancy: {
        title_text: "November 4th 1947, 02:13AM",
        body_text: [
                    "INTERVIEW 1: The first interview is with Nancy. Nancy is the friend of the victim and she has been upset, incoherent and inconsistent with her story. Although she was with Nancy that night, she was mysteriously absent when Nancy died.",
                    "TRANSCRIPT: Nancy is quiet and nervous. She hasn't spoken yet.",
                    "NOTES:"
                    ],
        option_text_1: "Where were you when Sharon died?",
        option_1_path: "dog_watching",
        option_text_2: "Why would you leave your friend alone at night?",
        option_2_path: "helping_out",
    },

    dog_watching: {
        title_text: "November 4th 1947, 02:15AM",
        body_text: [
                    "TRANSCRIPT: Nancy is quiet and nervous. She hasn't spoken yet.",
                    "You ask:'Where were you when Sharon died?', Nancy responds:'There was an old woman. She asked if I could watch her dog.'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her."
                    ],
        option_text_1: "Did you see anything odd whilst watching the woman's dog?",
        option_1_path: "teenager_running",
        option_text_2: "Why did the Old Lady need you to watch her dog?",
        option_2_path: "where_is_lady",
    },

    where_is_lady: {
        title_text: "November 4th 1947, 02:19AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Where were you when Sharon died?', Nancy responds:'There was an old woman. She asked if I could watch her dog.'",
                    "You ask:'Why did the Old Lady need you to watch her dog?', Nancy responds:'She never actually said where she was going, only that she needed to go and couldn't take her dog with her.' ",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. Where could an old woman be going that late at night?"
                    ],
        option_text_1: "Do you think she could've had something to do with this?",
        option_1_path: "sweet_granny",
        option_text_2: "Did you see where she went?",
        option_2_path: "back_alley_trouble",
    },

    sweet_granny: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Why did the Old Lady need you to watch her dog?', Nancy responds:'She never actually said where she was going, only that she needed to go and couldn't take her dog with her.' ",
                    "You ask:'Do you think she could've had something to do with this?' Nancy responds:'I mean she was quite old and sweet I doubt she is capable of such a thing.' You respond:'Thank you Nancy, that will be all for now.'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. This teenager could be important, should find out more."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    back_alley_trouble: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Why did the Old Lady need you to watch her dog?', Nancy responds:'She never actually said where she was going, only that she needed to go and couldn't take her dog with her.' ",
                    "You ask:'Did you see where she went?', Nancy responds:'She went off towards the back of the station, but there is nothing really back there...'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. This teenager could be important, should find out more."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    teenager_running: {
        title_text: "November 4th 1947, 02:19AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Where were you when Sharon died?', Nancy responds:'There was an old woman. She asked if I could watch her dog.'",
                    "You ask:'Did you see anything odd whilst watching the woman's dog?', Nancy responds: 'I didn't see anything weird.. well except. There was this teenaged boy that was a bit, idk how to describe it.'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. This teenager could be important, should find out more."
                    ],
        option_text_1: "Can you try to describe him?",
        option_1_path: "expound",
        option_text_2: "Do you think he could have something to do with this?",
        option_2_path: "blatant_classism",
    },

    blatant_classism: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did you see anything odd whilst watching the woman's dog?', Nancy responds: 'I didn't see anything weird.. well except. There was this teenaged boy that was a bit, idk how to describe it.'",
                    "You ask:'Do you think he could have something to do with this?', Nancy responds:'Well I mean... you know how the street kids are. I wouldn't put a violent crime past his capabilities.' You respond:'Okay Nancy, that will be all for now.'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. This teenager could be important, should find out more."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    expound: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did you see anything odd whilst watching the woman's dog?', Nancy responds: 'I didn't see anything weird.. well except. There was this teenaged boy that was a bit, idk how to describe it.'",
                    "You ask:'Can you try to describe him?' Nancy responds:'At first I though he seemed scary and dangerous, but when I caught his eye... for a moment I could've sworn I saw a horrified little boy.' You respond:'Okay Nancy, that will be all for now.'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. This teenager could be important, should find out more."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    helping_out: {
        title_text: "November 4th 1947, 02:15AM",
        body_text: [
                    "TRANSCRIPT: Nancy is quiet and nervous. She hasn't spoken yet.",
                    "You ask:'Why would you leave your friend alone at night?', Nancy responds:'I went to go help someone, Sharon assured me she would be okay.'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Who did you go to help?",
        option_1_path: "old_trouble",
        option_text_2: "Did you see anything odd that night?",
        option_2_path: "vandalism",
    },

    old_trouble: {
        title_text: "November 4th 1947, 02:19AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Why would you leave your friend alone at night?', Nancy responds:'I went to go help someone, Sharon assured me she would be okay.'",
                    "You ask:'Who did you go to help?' Nancy responds: 'I went to help an old woman by watching her dog.'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Why did she need you to watch her dog?",
        option_1_path: "mysterious_vanishing",
        option_text_2: "Why didn't your friend come with you?",
        option_2_path: "staying_back",
    },

    mysterious_vanishing: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Who did you go to help?' Nancy responds: 'I went to help an old woman by watching her dog.'",
                    "You ask: 'Why did she need to watch her dog' Nancy responds:'Well she had to... uh... I am actually not too sure why she had to leave.' You say:'Well Nancy that will be all for now.'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    staying_back: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Who did you go to help?' Nancy responds: 'I went to help an old woman by watching her dog.'",
                    "You ask: 'Why didn't your friend come with you?' Nancy responds:'Well she had to... uh... I am actually not too sure why she had to leave.' You say:'Sharon was going to come with me but the Old Lady insisted she would be quick and Sharon wouldn't be waiting for long.' You say:'Okay Nancy that will all for now'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    vandalism: {
        title_text: "November 4th 1947, 02:19AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Why would you leave your friend alone at night?', Nancy responds:'I went to go help someone, Sharon assured me she would be okay.'",
                    "You ask:'Did you see anything odd that night?' Nancy respond:'I did see this teenager vandalising a wall with some spray paint'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Did they seem capable of committing this crime?",
        option_1_path: "more_classism",
        option_text_2: "Were they still there when Sharon died?",
        option_2_path: "missing_teenager",
    },

    more_classism: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did you see anything odd that night?' Nancy respond:'I did see this teenager vandalising a wall with some spray paint'",
                    "You ask:'Did they seem capable of commiting this crime?' Nancy responds:'Well I mean. You now what the streetkids are like, who knows what they are truly capable of' You respond:'Okay Nancy that will be all for now'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    missing_teenager: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did they seem capable of commiting this crime?' Nancy responds:'Well I mean. You now what the streetkids are like, who knows what they are truly capable of' You respond:'Okay Nancy that will be all for now'",
                    "You ask:'Were they still there when Sharon died?', Nancy responds:'I don't think so. I looked away for second and then when I looked back he was gone', You respond:'Okay Nancy that will be all for now.'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: "new_witnesses",
        option_text_2: "Leave Nancy",
        option_2_path: "new_witnesses",
    },

    new_witnesses: {
        title_text: "November 4th 1947, 02:36AM",
        body_text: [
                    "WITNESSES: The third of the four witnesses is an old woman named Karen and the fourth witness is a streets kid named Leo. Once again, you will only be able to speak with one of them so make sure you choose wisely.",
                    "THE OLD WOMAN: The Old Woman was at the train station that night walking her dog. It was a little late to be walking a dog as an elderly woman though.",
                    "THE STREET KID: Leo was seen by several poeple running near where the crime was committed. He was also caught vandalising property and commiting various acts of anti-social behaviour. He is a troublesome one there is no doubt about that.",
                ],
        option_text_1: "Talk to Leo",
        option_1_path: "meet_leo",
        option_text_2: "Talk to Karen",
        option_2_path: "meet_karen",
    },

    meet_karen: {
        title_text: "November 4th 1947, 02:39AM",
        body_text: [
                    "INTERVIEW 2: The second interview is with Karen. Karen is an older woman who was there that night. She is less of a suspect and more of a witness to gain more information.",
                    "TRANSCRIPT: Karen:'I have never been interrogated before, It's quite exciting really.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure.",
                    ],
        option_text_1: "Where were you?",
        option_1_path: "shopping_spree",
        option_text_2: "Did you see anything strange?",
        option_2_path: "delinquent_rises",
    },

    delinquent_rises:{
        title_text: "November 4th 1947, 02:45AM",
        body_text: [
                    "TRANSCRIPT: Karen:'I have never been interrogated before, It's quite exciting really.'",
                    "You:'Did you see anything strange the night Sharon died.' Karen:'There was this delinquent. I am not trying to speculate but he seemed pretty dodgy to me.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure.",
                    ],
        option_text_1: "Seemed dodgy?",
        option_1_path: "vandalism_king",
        option_text_2: "Do you think he killed Sharon?",
        option_2_path: "speculation_nation",
    },

    vandalism_king:{
        title_text: "November 4th 1947, 02:45AM",
        body_text: [
                    "TRANSCRIPT: You:'Did you see anything strange the night Sharon died.' Karen:'There was this delinquent. I am not trying to speculate but he seemed pretty dodgy to me.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure.",
                    ],
        option_text_1: "Seemed dodgy?",
        option_1_path: "vandalism_king",
        option_text_2: "Do you think he killed Sharon?",
        option_2_path: "speculation_nation",
    },
// Joel if you are reading this, I would like to apologise for my naming conventions. Except delinquent_rises that was fire
    shopping_spree:{
        title_text: "November 4th 1947, 02:45AM",
        body_text: [
                    "TRANSCRIPT: Karen:'I have never been interrogated before, It's quite exciting really.'",
                    "You:'Where were you when Sharon died?' Karen:'I went to the shops to buy some things. Had to leave my dog with the nice woman.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure. It was reported that Nancy was watching the woman's dog that night.",
                    ],
        option_text_1: "What did you buy?",
        option_1_path: "treat_doggo",
        option_text_2: "What store did you go to?",
        option_2_path: "treat_purchase",
    },

    treat_doggo:{
        title_text: "November 4th 1947, 02:53AM",
        body_text: [
                    "TRANSCRIPT: You:'Where were you when Sharon died?' Karen:'I went to the shops to buy some things. Had to leave my dog with the nice woman.'",
                    "You:'What did you buy?', Karen:'I uhhh... well I went to buy some treats for my dog of course.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure. It was reported that Nancy was watching the woman's dog that night. Why leave the dog if you were buying dog treats.",
                    ],
        option_text_1: "Why would you leave your dog?",
        option_1_path: "weak_response_2",
        option_text_2: "Can you prove that?",
        option_2_path: "prove_it_2",
    },

    treat_purchase:{
        title_text: "November 4th 1947, 02:53AM",
        body_text: [
                    "TRANSCRIPT: You:'Where were you when Sharon died?' Karen:'I went to the shops to buy some things. Had to leave my dog with the nice woman.'",
                    "You: What store did you go to?', Karen:'I uhhh... well I went to the pet shop to buys some treats for my dog.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure. It was reported that Nancy was watching the woman's dog that night. Why leave the dog if you were buying dog treats.",
                    ],
        option_text_1: "Why would you leave your dog?",
        option_1_path: "weak_response_1",
        option_text_2: "Can you prove that?",
        option_2_path: "prove_it_1",
    },

    weak_response_1:{
        title_text: "November 4th 1947, 02:57AM",
        body_text: [
                    "TRANSCRIPT: You: What store did you go to?', Karen:'I uhhh... well I went to the pet shop to buys some treats for my dog.'",
                    "You: 'Why would you leave your dog if you were going to a pet shop?', Karen:'Well ummm, I guess I could've brought her haha. Old Age it makes you do weird things.' You:'Right... well that is all we have time for.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure. It was reported that Nancy was watching the woman's dog that night. Why leave the dog if you were buying dog treats. Pretty weak response from Karen.",
                    ],
        option_text_1: "Leave Karen",
        option_1_path: null,
        option_text_2: "Leave Karen",
        option_2_path: null,
    },

    weak_response_2:{
        title_text: "November 4th 1947, 02:57AM",
        body_text: [
                    "TRANSCRIPT: You:'What did you buy?', Karen:'I uhhh... well I went to buy some treats for my dog of course.'",
                    "Why would you leave your dog?, Karen:'Well ummm, I guess I could've brought her haha. Old Age it makes you do weird things. You:'Right... well that is all we have time for.''",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure. It was reported that Nancy was watching the woman's dog that night. Why leave the dog if you were buying dog treats. Pretty weak response from Karen.",
                    ],
        option_text_1: "Leave Karen",
        option_1_path: null,
        option_text_2: "Leave Karen",
        option_2_path: null,
    },

    prove_it_1:{
        title_text: "November 4th 1947, 02:57AM",
        body_text: [
                    "TRANSCRIPT: You: What store did you go to?', Karen:'I uhhh... well I went to the pet shop to buys some treats for my dog.'",
                    "You: 'Can you prove you were buying treats for your dog?', Karen:'Well ummm, I guess I can't. I didn't get a receipt or anything. Is that bad, should I have brought proof' You:'I am simply asking questions Karen, also that will be all for now.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure. It was reported that Nancy was watching the woman's dog that night. Why leave the dog if you were buying dog treats. Pretty weak response from Karen. Not much gained from that.",
                    ],
        option_text_1: "Leave Karen",
        option_1_path: null,
        option_text_2: "Leave Karen",
        option_2_path: null,
    },

    prove_it_2:{
        title_text: "November 4th 1947, 02:57AM",
        body_text: [
                    "TRANSCRIPT: You:'What did you buy?', Karen:'I uhhh... well I went to buy some treats for my dog of course.'",
                    "You: 'Can you prove you were buying treats for your dog at the pet shop?', Karen:'Well ummm, I guess I can't. I didn't get a receipt or anything. Is that bad, should I have brought proof' You:'I am simply asking questions Karen, also that will be all for now.'",
                    "NOTES: Karen's smile is either incredibly creepy or very wholesome, I am not too sure. It was reported that Nancy was watching the woman's dog that night. Why leave the dog if you were buying dog treats. Pretty weak response from Karen. Not much gained from that.",
                    ],
        option_text_1: "Leave Karen",
        option_1_path: null,
        option_text_2: "Leave Karen",
        option_2_path: null,
    },

    meet_leo: {
        title_text: "November 4th 1947, 02:39AM",
        body_text: [
                    "INTERVIEW 2: The second interview is with Leo. Leo is a troublesome street kid who has been caught commiting various petty crimes on countless occasions. When being brought in for quesioning Leo ran away from officers until he was finally caught and dragged to the station. Officers noted that he had a small pocket knife in his posession.",
                    "TRANSCRIPT: The teen has not spoken but he looks very guilty. He also seems very skittish and distracted",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me."
                    ],
        option_text_1: "Why did you run away?",
        option_1_path: "overwhelming_fear",
        option_text_2: "What are you hiding?",
        option_2_path: "leo_never_tells",
    },

    leo_never_tells:{
        title_text: "November 4th 1947, 02:45AM",
        body_text: [
                    "TRANSCRIPT: The teen has not spoken but he looks very guilty. He also seems very skittish and distracted",
                    "You:'What are you hiding?', Leo:'I didn't do anything!' You:'If you just tell me we can get this over with.' Leo:'Okay fine I was spray painting an alley wall.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo's vandalism was already documented so this provides nothing."
                    ],
        option_text_1: "Why were you there so late?",
        option_1_path: "poverty_sucks",
        option_text_2: "Why did you have a knife?",
        option_2_path: "poor_response",
    },

    poverty_sucks:{
        title_text: "November 4th 1947, 02:49AM",
        body_text: [
                    "TRANSCRIPT: You:'What are you hiding?', Leo:'I didn't do anything!' You:'If you just tell me we can get this over with.' Leo:'Okay fine I was spray painting an alley wall.'",
                    "You:'Why were you out so late?' Leo:'Why do you think? Do I look like I had somewhere to be that night. I wish I was in a home in my bed but no I was too scared to sleep at night alone.' You:'I am sorry Leo. That is all we have time for.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo's vandalism was already documented so this provides nothing. Poor kid, Leo doesn't deserve the life he has been given."
                    ],
        option_text_1: "Leave Leo",
        option_1_path: null,
        option_text_2: "Leave Leo",
        option_2_path: null,
    },

    poor_response:{
        title_text: "November 4th 1947, 02:49AM",
        body_text: [
                    "TRANSCRIPT: You:'What are you hiding?', Leo:'I didn't do anything!' You:'If you just tell me we can get this over with.' Leo:'Okay fine I was spray painting an alley wall.'",
                    "You:'Why did you have knife?' Leo:'Like I would tell you.' You:'Leo it doesn't look good if you refuse to explain it.' Leo:'I don't care I am not answering anymore of your questions.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo's vandalism was already documented so this provides nothing. Leo's poor response doesn't leave him in a good light. Maybe I should see him as more of a guilty suspect than a scared teen."
                    ],
        option_text_1: "Leave Leo",
        option_1_path: null,
        option_text_2: "Leave Leo",
        option_2_path: null,
    },

    overwhelming_fear: {
        title_text: "November 4th 1947, 02:45AM",
        body_text: [
                    "TRANSCRIPT: The teen has not spoken but he looks very guilty. He also seems very skittish and distracted",
                    "You ask:'Why did you run from the officers when you were brought in?', Leo responds:'Look I didn't see anything, so can I please go now. I promise I won't cause any trouble I just want to go.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo looks terrified, perhaps he isn't scared because of what he did, but because of what he saw someone else do."
                    ],
        option_text_1: "What are you afraid of?",
        option_1_path: "truth_revealed",
        option_text_2: "What are you hiding?",
        option_2_path: "leo_still_never_tells",
    },

    leo_still_never_tells:{
        title_text: "November 4th 1947, 02:49AM",
        body_text: [
                    "TRANSCRIPT: The teen has not spoken but he looks very guilty. He also seems very skittish and distracted",
                    "You:'What are you hiding?', Leo:'I didn't do anything!' You:'If you just tell me we can get this over with.' Leo:'Okay fine I was spray painting an alley wall.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo's vandalism was already documented so this provides nothing."
                    ],
        option_text_1: "Why were you there so late?",
        option_1_path: "poverty_still_sucks",
        option_text_2: "Why did you have a knife?",
        option_2_path: "another_poor_response",
    },

    poverty_still_sucks:{
        title_text: "November 4th 1947, 02:54AM",
        body_text: [
                    "TRANSCRIPT: You:'What are you hiding?', Leo:'I didn't do anything!' You:'If you just tell me we can get this over with.' Leo:'Okay fine I was spray painting an alley wall.'",
                    "You:'Why were you out so late?' Leo:'Why do you think? Do I look like I had somewhere to be that night. I wish I was in a home in my bed but no I was too scared to sleep at night alone.' You:'I am sorry Leo. That is all we have time for.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo's vandalism was already documented so this provides nothing. Poor kid, Leo doesn't deserve the life he has been given."
                    ],
        option_text_1: "Leave Leo",
        option_1_path: null,
        option_text_2: "Leave Leo",
        option_2_path: null,
    },

    another_poor_response:{
        title_text: "November 4th 1947, 02:54AM",
        body_text: [
                    "TRANSCRIPT: You:'What are you hiding?', Leo:'I didn't do anything!' You:'If you just tell me we can get this over with.' Leo:'Okay fine I was spray painting an alley wall.'",
                    "You:'Why did you have knife?' Leo:'Like I would tell you.' You:'Leo it doesn't look good if you refuse to explain it.' Leo:'I don't care I am not answering anymore of your questions.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo's vandalism was already documented so this provides nothing. Leo's poor response doesn't leave him in a good light. Maybe I should see him as more of a guilty suspect than a scared teen."
                    ],
        option_text_1: "Leave Leo",
        option_1_path: null,
        option_text_2: "Leave Leo",
        option_2_path: null,
    },

    truth_revealed: {
        title_text: "November 4th 1947, 02:49AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Why did you run from the officers when you were brought in?', Leo responds:'Look I didn't see anything, so can I please go now. I promise I won't cause any trouble I just want to go.'",
                    "You: What are you so afraid of Leo?, Leo :'Well I uh...  you aren't going to believe me.' You:'Just answer the question Leo.', Leo:'I saw who killed the woman in the blue coat. It was the Old Lady.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo looks terrified, perhaps he isn't scared because of what he did, but because of what he saw someone else do."
                    ],
        option_text_1: "How did she kill Sharon?",
        option_1_path: "sharp_cane",
        option_text_2: "Can you Prove it?",
        option_2_path: "lacking_proof"
    },

    sharp_cane: {
        title_text: "November 4th 1947, 02:54AM",
        body_text: [
                    "TRANSCRIPT: You: What are you so afraid of Leo?, Leo :'Well I uh...  you aren't going to believe me.' You:'Just answer the question Leo.', Leo:'I saw who killed the woman in the blue coat. It was the Old Lady.'",
                    "You:'How did she kill Sharon?' Leo:'It was ... I think her cane had a knife inside of it. I know it sounds crazt but you have to believe me.' You:'That is all we have time for today.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo looks terrified, perhaps he isn't scared because of what he did, but because of what he saw someone else do. A knife could've caused the gash on Sharon's side."
                    ],
        option_text_1: "Leave Leo",
        option_1_path: null,
        option_text_2: "Leave Leo",
        option_2_path: null,
    },

    lacking_proof:{
        title_text: "November 4th 1947, 02:54AM",
        body_text: [
                    "TRANSCRIPT: You: What are you so afraid of Leo?, Leo :'Well I uh...  you aren't going to believe me.' You:'Just answer the question Leo.', Leo:'I saw who killed the woman in the blue coat. It was the Old Lady.'",
                    "You:'Can you Prove it?' Leo:'Well I ...' Leo:'I can't prove it but you have to trust me!' You:'That is all we have time for today.'",
                    "NOTES: Leo seems incredibly anxious, there's something he's not telling me. Leo looks terrified, perhaps he isn't scared because of what he did, but because of what he saw someone else do. Tears are beginning to run down Leo's face and he looks petrified. I guess he is still a kid after all."
                    ],
        option_text_1: "Leave Leo",
        option_1_path: null,
        option_text_2: "Leave Leo",
        option_2_path: null,
    },
}
export default data;