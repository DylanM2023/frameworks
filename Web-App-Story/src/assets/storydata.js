const data = {
    beginning: {
        title_text: "November 4th 1947  02:00AM ",
        body_text: "Victim: Sharon Livingston, female approximately 5 ft 2 with long blonde hair and blue eyes. Evidence: No autopsy performed yet, but from on-the-scene officers fatality seemed to be derived from a deep gash on her side, of which caused excessive bleeding.The bleeding being the cause of death is supported by the crimson new flair left on her blue coat.Notes: The Chief is in his usual lazy mood and doesn’t want to “Waste good officers on a case that lacks importance”. Due to our leader’s familiar incompetence this case has been passed around the office like a hot potato. However, as the greatest, most talented and undoubtedly the most dashing detective in the office, do you think that you could solve this case in only 2 hours? I guess it's all up to you on whether you dismiss this case or … Dig a Little Deeper.",
        option_text_1: "Dismiss",
        option_1_path: "dismiss",
        option_text_2: "Dig a little deeper?",
        option_2_path:"meet_the_witnesses",
    },

    dismiss: {
        title_text: "This is a BAD ENDING",
        body_text: "I don't know how to code this yet but it will be an end screen, pinky promise !!!",
        option_text_1: "No Path",
        option_1_path: null,
        option_text_2: "Also No Path",
        option_2_path: null,
    },

    meet_the_witnesses: {
        title_text: "November 4th 1947 02:30AM",
        body_text: "Wow you actually chose to dig a little bit deeper huh, well I guess we can expect no less from the greatest, most talented and undoubtedly the most dashing detective in the office. Anyways, we have four witnesses here today for you to interrogate but again due to our rather lackluster Chief you only have enough time to talk to two of them. Whilst I would LOVE to give you all the details, for some reason (if you didn't get the hint already) we are suuuuper short on time. So you can either talk to some Business guy who was on the train or the victim's friend who was the last person to see Sharon alive... allegedly.",
        option_text_1: "Talk to Business man",
        option_1_path: "business_convo",
        option_text_2: "Talk to Friend",
        option_2_path: "friend_convo",
    },

    friend_convo: {
        title_text: "Friend Interrogation,",
        body_text: "",
        option_text_1: "No further Path",
        option_1_path: "teenager_convo",
        option_text_2: "No further Path",
        option_2_path: "old_woman_convo",
    },
    business_convo: {
        title_text: "November 4th 1947,",
        body_text: "'Business Man walks into office and takes a seat, visibly unimpressed' ",
        option_text_1: "No further Path",
        option_1_path: "teenager_convo",
        option_text_2: "No further Path",
        option_2_path: "old_woman_convo",
    },
    teenager_convo: {
        title_text: "November 4th 1947,",
        body_text: "Body number 4",
        option_text_1: "No further Path",
        option_1_path: null,
        option_text_2: "No further Path",
        option_2_path: null,
    },
    old_woman_convo: {
        title_text: "November 4th 1947,",
        body_text: "Body number 5",
        option_text_1: "No further Path",
        option_1_path: null,
        option_text_2: "No further Path",
        option_2_path: null,
    },
}

export default data;