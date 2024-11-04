const data = {
    beginning: {
        title_text: "November 4th 1947,",
        body_text: "Cold winter night, girl stabbed shock, gasp , OMG!",
        option_text_1: "Friend",
        option_1_path: "friend_convo",
        option_text_2: "Builder",
        option_2_path:"builder_convo",
    },
    friend_convo: {
        title_text: "November 4th 1947,",
        body_text: "Body number 2",
        option_text_1: "No further Path",
        option_1_path: "teenager_convo",
        option_text_2: "No further Path",
        option_2_path: "old_woman_convo",
    },
    builder_convo: {
        title_text: "November 4th 1947,",
        body_text: "Body number 3",
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