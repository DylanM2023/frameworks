const data = {
    beginning: {
        title_text: "November 4th 1947,     02:00AM ",
        body_text: ["VICTIM: Sharon Livingston, female approximately 5 ft 2 with long blonde hair and blue eyes. Wearing a large blue coat and a pearl necklace.",
                    "EVIDENCE: No autopsy performed yet, but from on the scene officers fatality seemed to be derived from a deep gash on her side, of which caused excessive bleeding. The bleeding being the cause of death is supported by the crimson new flair left on her blue coat.",
                    "NOTES: The Chief is in his usual lazy mood and doesn’t want to “Waste good officers on a case that lacks importance”. Due to our leader’s familiar incompetence this case has been passed around the office like a bad cold. I mean who would waste there time on a case if they only have 2 hours to solve it? So to whoever is reading this, I guess it's up to you whether you dismiss this case or... Dig a Little Bit Deeper.",
                    ""
                    ],
        option_text_1: "Dismiss",
        option_1_path: null,
        option_text_2: "Dig a Little Deeper?",
        option_2_path:"meet_the_witnesses",
    },

    meet_the_witnesses: {
        title_text: "November 4th 1947, 02:03AM",
        body_text: [
                    "WITNESSES: The first of the four witnesses is the victim's friend Nancy and the second witness is a business man named Mathew. Once again, you will only be able to speak with one of them so make sure you choose wisely.",
                    "THE FRIEND: Nancy was with Sharon when the murder took place and was the person who called us on to the scene. Nancy has no criminal record and appeared visibly distressed and unsettled. Any questioning from her will be more focused on getting more info than trying to get a confession.",
                    "THE BUSINESS MAN: Mathew was taking the train home the night of the murder and was unaware of any attack or scene at the subway station. At least that's what he claims. When being brought in for questioning the man seemed reluctant, could be due to a busy schedule or something more sinister. The man also seemed unfazed when he was told about the murder leading us to believe he could be a good suspect."
                    ],
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
        title_text: "November 4th 1947, 02:08AM",
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