const data = {
    beginning: {
        title_text: "November 4th 1947,     02:00AM ",
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
        option_1_path: null,
        option_text_2: "Leave Mathew",
        option_2_path: null,
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
        option_1_path: null,
        option_text_2: "Leave Mathew",
        option_2_path: null, 
    },

    mathew_clear_3: {
        title_text: "November 4th 1947, 02:26AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did he seem dangerous?' Mathew responds:'Well... now that I think about it he was running away from the station. He seemed flustered like he was running from something.'",
                    "You ask:'Did he appear armed?' Mathew responds:'I didn't see anything specific but he was definitely holding onto something in his hand.' You respond:'Thank you for your time Mathew.'",
                    "NOTES: Mathew seems a bit too eager to leave. This teenager seems like a possible suspect, I should probably investigate further. This teenager could've been fleeing a crime he commited. Even a small blade could've caused the gash in Sharon's side."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: null,
        option_text_2: "Leave Mathew",
        option_2_path: null,   
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
        option_1_path: null,
        option_text_2: "Leave Mathew",
        option_2_path: null,   
    },

    mathew_more_sus_1: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Where do you need to be so badly?', Mathew responds:'(sighs) If I am being completely honest, I have to go out looking for a job.'",
                    "You ask:'Why did you lie?', Mathew responds(flustered):'Well... I didn't mean to lie... I was simply embarrased.', Mathew then blurted out:'Wait! I am not here because you think I am responsible for the girls death', Mathew finally said:'Well I uh... I won't answer anymore questions without a lawyer present!'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew mentioned before he was on his way home from work that night. He must have lied. Mathew seems frustrated to be considered a suspect. Mathew will not be questioned further, increasing my suspicions."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: null,
        option_text_2: "Leave Mathew",
        option_2_path: null,
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
        option_1_path: null,
        option_text_2: "Leave Mathew",
        option_2_path: null, 
    },

    mathew_sus_4: {
        title_text: "November 4th 1947, 02:26AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Can you prove you took the train?', Mathew responds(flustered):'Well... not exactly. I mean who would keep a train ticket?', Mathew then asks:'Wait! You don't seriously believe I had something to do with this do you?'",
                    "You say:'I am simply asking questions.', Mathew retorts:'This is absurd... I mean how could you... I won't go any further without my lawyer present!'",
                    "NOTES: Mathew seems a bit too eager to leave. Mathew isn't giving me great answers. Mathew seems frustrated to be considered a suspect. Mathew will not be questioned further, increasing my suspicions."
                    ],
        option_text_1: "Leave Mathew",
        option_1_path: null,
        option_text_2: "Leave Mathew",
        option_2_path: null, 
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
        option_2_path: "where_is_lady?",
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
        option_1_path: null,
        option_text_2: "Leave Nancy",
        option_2_path: null,
    },

    back_alley_trouble: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Why did the Old Lady need you to watch her dog?', Nancy responds:'She never actually said where she was going, only that she needed to go and couldn't take her dog with her.' ",
                    "You ask:'Did you see where she went?', Nancy responds:'She went off towards the back of the station, but there is nothing really back there...'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. This teenager could be important, should find out more."
                    ],
        option_text_1: "Leave Nancy",
        option_1_path: null,
        option_text_2: "Leave Nancy",
        option_2_path: null,
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
        option_1_path: null,
        option_text_2: "Leave Nancy",
        option_2_path: null,
    },

    expound: {
        title_text: "November 4th 1947, 02:24AM",
        body_text: [
                    "TRANSCRIPT: You ask:'Did you see anything odd whilst watching the woman's dog?', Nancy responds: 'I didn't see anything weird.. well except. There was this teenaged boy that was a bit, idk how to describe it.'",
                    "You ask:'Can you try to describe him?' Nancy responds:'At first I though he seemed scary and dangerous, but when I caught his eye... for a moment I could've sworn I saw a horrified little boy.' You respond:'Okay Nancy, that will be all for now.'",
                    "NOTES: The old woman is another suspect, could be important to find out more about her. This teenager could be important, should find out more."
                    ],
                    option_text_1: "Leave Nancy",
                    option_1_path: null,
                    option_text_2: "Leave Nancy",
                    option_2_path: null,
    },

    helping_out: {
        title_text: "November 4th 1947, 02:15AM",
        body_text: [
                    "TRANSCRIPT: Nancy is quiet and nervous. She hasn't spoken yet.",
                    "You ask:'Why would you leave your friend alone at night?', Nancy responds:'I went to go help someone, Sharon assured me she would be okay.'",
                    "NOTES: Why leave her friend alone at night, seems strange."
                    ],
        option_text_1: "Why didn't Sharon go with you?",
        option_1_path: "staying_back",
        option_text_2: "Did you see anything odd that night?",
        option_2_path: "vandalism",
    },



}

export default data;