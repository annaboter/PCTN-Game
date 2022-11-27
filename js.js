var story = 0; // keep story from being undefined 
var form = document.getElementById('theAdventure');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';
let image = document.getElementById('pocahontas');

var story_telling = {
  //beginning of the story
  "start": { 
    "question": "Your name is Amonute. You are part of a community of people that live in the lands of their territory. Your father is the chief of this community. As the chief's daughter, and as a girl with higher status than most members of the the community, you feel responsible for it. At some point, your community notices that strange men have set foor upon your lands. They seem to intend to make up camp and stay. What do you do?",
    "answers": {
      "a": "Approach the strangers.",
      "b": "Do not approach the strangers.",
    }
  },

  // first choice 
  "1_a": {
    "question": "You approach the strangers and try to make peace with them. In doing this, you will first have to put yourself and your community at risk by approaching these foreigners. However, if you succeed in making peace, this might result in friendship and trading between the two camps. This would be a positive outcome for your community.",
    "answers": {
      "a": "You can't do anything but hope for the best.",
    }
  },

  // second choice
  "1_b": {
    "question": "You decide not to take any risks and do not approach strangers. Instead, you decide to move away to a further location within your territory. However, this means you would have to leave your home and leave your lands in the hands of the foreigners. This grants them the freedom to roam the lands unconditionally and use it as they wish.",
    "answers": {
      "c": "You pack up your things and anxiously await what is going to happen next.",
    }
  },

  // second question 1_a path
  "2_a": {
    "question": "Although you and the strangers have become accustomed to each other, the so-called friendship between them and your community quickly becomes more exploitative and demanding. The strangers seem to want to further explore the lands and expand their territory, a meeting between them and your community was eventually inevitable. Thankfully, the strangers seem to have come in peace and are eager to learn from your community in how to extract natural resources and navigate the lands of your territory. Sustaining a peaceful relationship with these foreigners means giving up on parts of your territory and sharing resources, which might put your own community at risk. However, denying the strangers might lead to war between the two camps. What do you do?",
    "answers": {
      "d": "Don't allow them to extract natural resources.",
      "e": "Allow them to extract natural resources.",
    }
  },

  // second question 1_b path
  "2_c": {
    "question": "As the strangers seem to want to further explore the lands and expand their territory, a meeting between them and your community was eventually inevitable. Thankfully, the strangers seem to have come in peace and are eager to learn from your community in how to extract natural resources and navigate the lands of your territory. Sustaining a peaceful relationship with these strangers means giving up on parts of your territory and sharing resources, which might put your own community at risk. However, denying the strangers might lead to war between the two camps. What do you do?",
    "answers": {
      "f": "Don't allow them to extract natural resources.",
      "g": "Allow them to extract natural resources.",
    }
  },

  // first choice 2_a
  "3_d": {
    "question": "You put your foot down and make clear that even though you still come in peace, your community simply can not help these foreigners any further. In doing this, you slightly push back against the foreigners’ demands and show them that you will not exploit your community for the foreigners’ gain. However, refusing to help the foreigners might lead to tensions or eventually, to war. This would put your community at great risk.",
    "answers": {
      "h": "Tensions between your community and the strangers rises.",
    }
  },

  // first choice 2_c
  "3_f": {
    "question": "You put your foot down and make clear that even though you still come in peace, your community simply can not help these foreigners any further. In doing this, you slightly push back against the foreigners’ demands and show them that you will not exploit your community for the foreigners’ gain. However, refusing to help the foreigners might lead to tensions or eventually, to war. This would put your community at great risk.",
    "answers": {
      "i": "Tensions between your community and the strangers rises.",
    }
  },

  // second choice 2_a
  "3_e": {
    "question": "You keep the peace by helping them find some resources and letting them expand some of their territory to keep your community safe. However, this might give the foreigners a chance to become more powerful, which could lead to them trying to exercise dominance over your community.",
    "answers": {
      "j": "You helplessly watch the strangers destroy your land. At least your people are safe, for now...",
    } 
  },

  // second choice 2_c
  "3_g": {
    "question": "You keep the peace by helping them find some resources and letting them expand some of their territory to keep your community safe. However, this might give the foreigners a chance to become more powerful, which could lead to them trying to exercise dominance over your community.",
    "answers": {
      "k": "You helplessly watch the strangers destroy your land. At least your people are safe, for now...",
    }
  },

  // third question following 3_d and 3_e (answers h, i, j, k all lead to the same question)
  "4_h": {
    "question": "Since the strangers seem to have gained more resources, they have become more powerful and start to  exert dominance over your community. Tensions arise. Your father decides that the strangers’ weapons are the greatest threat to your community. Therefore, he and a few members of your community set out to steal and hide their weapons so that they can not harm your community. One of these warriors was killed and another was wounded during this expedition. In exchange, the warriors of your community abducted one of the strangers. Your community might want to kill this man as revenge and justice. What do you do?",
    "answers": {
      "l": "Interfere.",
      "m": "Do not interfere.",
    }
  },
  "4_i": {
    "question": "Since the strangers seem to have gained more resources, they have become more powerful and start to  exert dominance over your community. Tensions arise. Your father decides that the strangers’ weapons are the greatest threat to your community. Therefore, he and a few members of your community set out to steal and hide their weapons so that they can not harm your community. One of these warriors was killed and another was wounded during this expedition. In exchange, the warriors of your community abducted one of the strangers. Your community might want to kill this man as revenge and justice. What do you do?",
    "answers": {
      "n": "Interfere.",
      "o": "Do not interfere.",
    }
  },
  "4_j": {
    "question": "Since the strangers seem to have gained more resources, they have become more powerful and start to  exert dominance over your community. Tensions arise. Your father decides that the strangers’ weapons are the greatest threat to your community. Therefore, he and a few members of your community set out to steal and hide their weapons so that they can not harm your community. One of these warriors was killed and another was wounded during this expedition. In exchange, the warriors of your community abducted one of the strangers. Your community might want to kill this man as revenge and justice. What do you do?",
    "answers": {
      "p": "Interfere.",
      "q": "Do not interfere.",
    }
  },
  "4_k": {
    "question": "Since the strangers seem to have gained more resources, they have become more powerful and start to  exert dominance over your community. Tensions arise. Your father decides that the strangers’ weapons are the greatest threat to your community. Therefore, he and a few members of your community set out to steal and hide their weapons so that they can not harm your community. One of these warriors was killed and another was wounded during this expedition. In exchange, the warriors of your community abducted one of the strangers. Your community might want to kill this man as revenge and justice. What do you do?",
    "answers": {
      "r": "Interfere.",
      "s": "Do not interfere.",
    }
  }, 

  // interfere path l, n, p, r
  "5_l": {
    "question": "You ask your community members to consider sparing his life and adopt him (for a while) in the community. Hopefully, the man will feel indebted to your community and eventually ask his own men to lay down their weapons. This might again create peace between the two communities. However, pleading for this man’s life might go against your fathers’ wishes and create tensions within the community.",
    "answers": {
      "t": "The man's life is spared, but at what cost?",
    }
  },
  "5_n": {
    "question": "You ask your community members to consider sparing his life and adopt him (for a while) in the community. Hopefully, the man will feel indebted to your community and eventually ask his own men to lay down their weapons. This might again create peace between the two communities. However, pleading for this man’s life might go against your fathers’ wishes and create tensions within the community.",
    "answers": {
      "u": "The man's life is spared, but at what cost?",
    }
  },
  "5_p": {
    "question": "You ask your community members to consider sparing his life and adopt him (for a while) in the community. Hopefully, the man will feel indebted to your community and eventually ask his own men to lay down their weapons. This might again create peace between the two communities. However, pleading for this man’s life might go against your fathers’ wishes and create tensions within the community.",
    "answers": {
      "v": "The man's life is spared, but at what cost?",
    }
  },
  "5_r": {
    "question": "You ask your community members to consider sparing his life and adopt him (for a while) in the community. Hopefully, the man will feel indebted to your community and eventually ask his own men to lay down their weapons. This might again create peace between the two communities. However, pleading for this man’s life might go against your fathers’ wishes and create tensions within the community.",
    "answers": {
      "w": "The man's life is spared, but at what cost?",
    }
  },

  // not interfere path m, o, q, s
  "5_m": {
    "question": "You do not interfere with whatever decision your father and your community makes. If this man’s life is taken, this might send a strong message to the strangers.",
    "answers": {
      "x": "Accept that there might be dire consequences.",
    }
  },
  "5_o": {
    "question": "You do not interfere with whatever decision your father and your community makes. If this man’s life is taken, this might send a strong message to the strangers.",
    "answers": {
      "y": "Accept that there might be dire consequences.",
    }
  },
  "5_q": {
    "question": "You do not interfere with whatever decision your father and your community makes. If this man’s life is taken, this might send a strong message to the strangers.",
    "answers": {
      "z": "Accept that there might be dire consequences.",
    }
  },
  "5_s": {
    "question": "You do not interfere with whatever decision your father and your community makes. If this man’s life is taken, this might send a strong message to the strangers.",
    "answers": {
      "a1": "Accept that there might be dire consequences.",
    }
  },

  // question 4 t, u, v, w path
  "6_t": {
    "question": "Because of the abduction of one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a2": "Marry the stranger.",
      "a3": "Do not marry the stranger.",
    }
  },
  "6_u": {
    "question": "Because of the abduction of one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a4": "Marry the stranger.",
      "a5": "Do not marry the stranger.",
    }
  },
  "6_v": {
    "question": "Because of the abduction of one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a6": "Marry the stranger.",
      "a7": "Do not marry the stranger.",
    }
  },
  "6_w": {
    "question": "Because of the abduction of one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a8": "Marry the stranger.",
      "a9": "Do not marry the stranger.",
    }
  },

  // question 4 x, y, z, a1
  "6_x": {
    "question": "Because of the abduction and word of you killing one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a10": "Marry the stranger.",
      "a11": "Do not marry the stranger.",
    }
  },
  "6_y": {
    "question": "Because of the abduction and word of you killing one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a12": "Marry the stranger.",
      "a13": "Do not marry the stranger.",
    }
  },
  "6_z": {
    "question": "Because of the abduction and word of you killing one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a14": "Marry the stranger.",
      "a15": "Do not marry the stranger.",
    }
  },
  "6_a1": {
    "question": "Because of the abduction and word of you killing one of their own, the strangers are very angry. There are rumors of them wanting to abduct you in order to exchange you for their weapons and for food. Your father proposes you marry a man of another community. This marriage will create bonds between the two communities, which means that your community will be stronger against the strangers and you will have more protection. Personally, you do not feel much love for this man and the idea of marrying him. What do you do?",
    "answers": {
      "a16": "Marry the stranger.",
      "a17": "Do not marry the stranger.",
    }
  },

  // marry path a2, a4, a6, a8, a10, a12, a14, a16
  "7_a2": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a18": "A part of you feels lost.",
    }
  },
  "7_a4": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a19": "A part of you feels lost.",
    }
  },
  "7_a6": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a20": "A part of you feels lost.",
    }
  },
  "7_a8": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a21": "A part of you feels lost.",
    }
  },
  "7_a10": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a22": "A part of you feels lost.",
    }
  },
  "7_12": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a23": "A part of you feels lost.",
    }
  },
  "7_a14": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a24": "A part of you feels lost.",
    }
  },
  "7_a16": {
    "question": "You decide to give up your freedom and marry this man in order to protect yourself and in hope to strengthen your community.",
    "answers": {
      "a25": "A part of you feels lost.",
    }
  },

  // not marry path a3, a5, a7, a9, a11, a13, a15, a17
  "7_a3": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a26": "Everything is done to keep you and your community safe.",
    }
  },
  "7_a5": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a27": "Everything is done to keep you and your community safe.",
    }
  },
  "7_a7": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a28": "Everything is done to keep you and your community safe.",
    }
  },
  "7_a9": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a29": "Everything is done to keep you and your community safe.",
    }
  },
  "7_a11": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a30": "Everything is done to keep you and your community safe.",
    }
  },
  "7_a13": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a31": "Everything is done to keep you and your community safe.",
    }
  },
  "7_a15": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a32": "Everything is done to keep you and your community safe.",
    }
  },
  "7_a17": {
    "question": "You decide to stay true to yourself and keep your freedom and not marry this man, even though this might mean that you can not be protected and the safety of your community might be at risk.",
    "answers": {
      "a33": "Everything is done to keep you and your community safe.",
    }
  },

  // question 5 a18-a33
  "8_a18": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a34": "First option.",
      "a35": "Second option.",
    }
  },
  "8_a19": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a36": "First option.",
      "a37": "Second option.",
    }
  },
  "8_a20": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a38": "First option.",
      "a39": "Second option.",
    }
  },
  "8_a21": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a40": "First option.",
      "a41": "Second option.",
    }
  },
  "8_a22": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a42": "First option.",
      "a43": "Second option.",
    }
  },
  "8_a23": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a44": "First option.",
      "a45": "Second option.",
    }
  },
  "8_a24": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a46": "First option.",
      "a47": "Second option.",
    }
  },
  "8_a25": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a48": "First option.",
      "a49": "Second option.",
    }
  },
  "8_a26": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a50": "First option.",
      "a51": "Second option.",
    }
  },
  "8_a27": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a52": "First option.",
      "a53": "Second option.",
    }
  },
  "8_a28": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a54": "First option.",
      "a55": "Second option.",
    }
  },
  "8_a29": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a56": "First option.",
      "a57": "Second option.",
    }
  },
  "8_a30": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a58": "First option.",
      "a59": "Second option.",
    }
  },
  "8_a31": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a60": "First option.",
      "a61": "Second option.",
    }
  },
  "8_a32": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a62": "First option.",
      "a63": "Second option.",
    }
  },
  "8_a33": {
    "question": "Despite your communities’ efforts to protect you, the strangers succeed in abducting you. The strangers seem desperate. They give you two options: the first option is marrying one of their members. This will undoubtedly create some sort of peace, but before marrying this man you must change your name and convert to their religion. Your second option would be to accompany them on a trip to their homeland in order to help negotiate. The strangers believe that your high status as a ‘princess’ might convince their monarch to fund further their expedition. What do you do?",
    "answers": {
      "a64": "First option.",
      "a65": "Second option.",
    }
  },
  // ending first option a34, a36, a38, a40, a42, a44, a46, a48, a50, a52, a54, a56, a58, a60, a62, a64
  "9_a34": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a36": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a38": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a40": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a42": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a44": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a46": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a48": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a50": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a52": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a54": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a56": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a58": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a60": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a62": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },
  "9_a64": {
    "question": "You decide to marry this man even if he asks you to change your name and convert yourself to his religion. You give up your identity in order to (re)gain some of your freedom and create peace between the two camps. However, despite your efforts, the strangers are greedy and do not listen to your pleas and grievances to respect your community’s land and wishes. Your people and land are slowly being taken away even though they try everything in their might to stop the process of the strangers settling. All you can do is watch as you are forced to learn about the stangers’ religion, partcipating in rituals where you get “baptised” and you are forced to take a “biblical name”: Rebacca. You wonder if things will ever go back the way it was before the strangers came.",
  },

  // ending second option a35, a37, a39, a41, a43, a45, a47, a49, a51, a53, a55, a57, a59, a61, a63, a65

  "9_a35": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a37": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a39": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a41": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a43": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a45": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a47": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a49": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a51": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a53": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a55": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a57": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a59": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a61": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a63": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },
  "9_a65": {
    "question": "You decide to accompany them on their travels to their homeland and help convince their monarch to fund their expedition. You hope that by helping the foreigners, they will be thankful to you. This might grant you the position to ask them to drop all hostilities and leave your community alone. However, the journey is far and you do not know when and if you will ever see your community again. When the funding got approved, you are allowed to journey back to visit your community. Unfortunately, you pass away before you can ever set sail due to an undetermined disease. The strangers never stopped exploring.",
  },

};

// Continue link
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
  answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
  if(answer) {
    story++;//increment or add 1 to
    populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
    console.log("Story time!"); // Console log to make sure things are working
  }
});

// Reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}

// Generate answers from story
function populateForm(story) {
  var current_story = story_telling[story];//take values from story_telling story
  var text = '';

  for(var prop in current_story['answers']) {
    if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
      text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
    }
  }

  form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
  form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning