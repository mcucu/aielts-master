const constant = {
    SKILL_DESCRIPTION: {
        'Writing Task 1': 'Describe visual information (graph, chart, table, map, or diagram)',
        'Writing Task 2': 'Respond to a point of view, argument, or problem'
    },
    WRITING_SCORES: [
        'Task Achievement',
        'Task Response',
        'Coherence & Cohesion',
        'Lexical Resource',
        'Grammatical Range & Accuracy',
        'Overall'
    ],
    BAND_DESCRIPTOR: {
        "writing": {
            "task2": {
                "taskResponse": {
                    "band9": "The prompt is appropriately addressed and explored in depth.\nA clear and fully developed position is presented which directly answers the question/s.\nIdeas are relevant, fully extended and well supported.\nAny lapses in content or support are extremely rare.",
                    "band8": "The prompt is appropriately and sufficiently addressed.\nA clear and well-developed position is presented in response to the question/s.\nIdeas are relevant, well extended and supported.\nThere may be occasional omissions or lapses in content.",
                    "band7": "The main parts of the prompt are appropriately addressed.\nA clear and developed position is presented.\nMain ideas are extended and supported but there may be a tendency to over-generalise or there may be a lack of focus and precision in supporting ideas/material.",
                    "band6": "The main parts of the prompt are addressed (though some may be more fully covered than others). An appropriate format is used.\nA position is presented that is directly relevant to the prompt, although the conclusions drawn may be unclear, unjustified or repetitive.\nMain ideas are relevant, but some may be insufficiently developed or may lack clarity, while some supporting arguments and evidence may be less relevant or inadequate.",
                    "band5": "The main parts of the prompt are incompletely addressed. The format may be inappropriate in places.\nThe writer expresses a position, but the development is not always clear.\nSome main ideas are put forward, but they are limited and are not sufficiently developed and/or there may be irrelevant detail.\nThere may be some repetition.",
                    "band4": "The prompt is tackled in a minimal way, or the answer is tangential, possibly due to some misunderstanding of the prompt. The format may be inappropriate.\nA position is discernible, but the reader has to read carefully to find it.\nMain ideas are difficult to identify and such ideas that are identifiable may lack relevance, clarity and/or support.\nLarge parts of the response may be repetitive.",
                    "band3": "No part of the prompt is adequately addressed, or the prompt has been misunderstood.\nNo relevant position can be identified, and/or there is little direct response to the question/s.\nThere are few ideas, and these may be irrelevant or insufficiently developed.",
                    "band2": "The content is barely related to the prompt.\nNo position can be identified.\nThere may be glimpses of one or two ideas without development.",
                    "band1": "Responses of 20 words or fewer are rated at Band 1.\nThe content is wholly unrelated to the prompt.\nAny copied rubric must be discounted.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                },
                "coherenceAndCohesion": {
                    "band9": "The message can be followed effortlessly.\nCohesion is used in such a way that it very rarely attracts attention.\nAny lapses in coherence or cohesion are minimal.\nParagraphing is skilfully managed.",
                    "band8": "The message can be followed with ease.\nInformation and ideas are logically sequenced, and cohesion is well managed.\nOccasional lapses in coherence and cohesion may occur.\nParagraphing is used sufficiently and appropriately.",
                    "band7": "Information and ideas are logically organised, and there is a clear progression throughout the response. (A few lapses may occur, but these are minor.)\nA range of cohesive devices including reference and substitution is used flexibly but with some inaccuracies or some over/under use.\nParagraphing is generally used effectively to support overall coherence, and the sequencing of ideas within a paragraph is generally logical.",
                    "band6": "Information and ideas are generally arranged coherently and there is a clear overall progression.\nCohesive devices are used to some good effect but cohesion within and/or between sentences may be faulty or mechanical due to misuse, overuse or omission.\nThe use of reference and substitution may lack flexibility or clarity and result in some repetition or error.\nParagraphing may not always be logical and/or the central topic may not always be clear.",
                    "band5": "Organisation is evident but is not wholly logical and there may be a lack of overall progression.\nNevertheless, there is a sense of underlying coherence to the response.\nThe relationship of ideas can be followed but the sentences are not fluently linked to each other.\nThere may be limited/overuse of cohesive devices with some inaccuracy.\nThe writing may be repetitive due to inadequate and/or inaccurate use of reference and substitution.\nParagraphing may be inadequate or missing.",
                    "band4": "Information and ideas are evident but not arranged coherently and there is no clear progression within the response.\nRelationships between ideas can be unclear and/or inadequately marked. There is some use of basic cohesive devices, which may be inaccurate or repetitive.\nThere is inaccurate use or a lack of substitution or referencing.\nThere may be no paragraphing and/or no clear main topic within paragraphs.",
                    "band3": "There is no apparent logical organisation. Ideas are discernible but difficult to relate to each other.\nThere is minimal use of sequencers or cohesive devices.\nThose used do not necessarily indicate a logical relationship between ideas.\nThere is difficulty in identifying referencing.\nAny attempts at paragraphing are unhelpful.",
                    "band2": "There is little relevant message, or the entire response may be off-topic.\nThere is little evidence of control of organisational features.",
                    "band1": "Responses of 20 words or fewer are rated at Band 1.\nThe writing fails to communicate any message and appears to be by a virtual non-writer.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                },
                "lexicalResource": {
                    "band9": "Full flexibility and precise use are widely evident.\nA wide range of vocabulary is used accurately and appropriately with very natural and sophisticated control of lexical features.\nMinor errors in spelling and word formation are extremely rare and have minimal impact on communication.",
                    "band8": "A wide resource is fluently and flexibly used to convey precise meanings.\nThere is skilful use of uncommon and/or idiomatic items when appropriate, despite occasional inaccuracies in word choice and collocation.\nOccasional errors in spelling and/or word formation may occur, but have minimal impact on communication.",
                    "band7": "The resource is sufficient to allow some flexibility and precision.\nThere is some ability to use less common and/or idiomatic items.\nAn awareness of style and collocation is evident, though inappropriacies occur.\nThere are only a few errors in spelling and/or word formation and they do not detract from overall clarity.",
                    "band6": "The resource is generally adequate and appropriate for the task.\nThe meaning is generally clear in spite of a rather restricted range or a lack of precision in word choice.\nIf the writer is a risk-taker, there will be a wider range of vocabulary used but higher degrees of inaccuracy or inappropriacy.\nThere are some errors in spelling and/or word formation, but these do not impede communication.",
                    "band5": "The resource is limited but minimally adequate for the task.\nSimple vocabulary may be used accurately but the range does not permit much variation in expression.\nThere may be frequent lapses in the appropriacy of word choice and a lack of flexibility is apparent in frequent simplifications and/or repetitions.\nErrors in spelling and/or word formation may be noticeable and may cause some difficulty for the reader.",
                    "band4": "The resource is limited and inadequate for or unrelated to the task. Vocabulary is basic and may be used repetitively.\nThere may be inappropriate use of lexical chunks (e.g. memorised phrases, formulaic language and/or language from the input material).\nInappropriate word choice and/or errors in word formation and/or in spelling may impede meaning.",
                    "band3": "The resource is inadequate (which may be due to the response being significantly underlength). Possible over-dependence on input material or memorised language.\nControl of word choice and/or spelling is very limited, and errors predominate. These errors may severely impede meaning.",
                    "band2": "The resource is extremely limited with few recognisable strings, apart from memorised phrases.\nThere is no apparent control of word formation and/or spelling.",
                    "band1": "Responses of 20 words or fewer are rated at Band 1.\nNo resource is apparent, except for a few isolated words.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                },
                "grammaticalRangeAndAccuracy": {
                    "band9": "A wide range of structures is used with full flexibility and control.\nPunctuation and grammar are used appropriately throughout.\nMinor errors are extremely rare and have minimal impact on communication.",
                    "band8": "A wide range of structures is flexibly and accurately used.\nThe majority of sentences are error-free, and punctuation is well managed.\nOccasional, non-systematic errors and inappropriacies occur, but have minimal impact on communication.",
                    "band7": "A variety of complex structures is used with some flexibility and accuracy.\nGrammar and punctuation are generally well controlled, and error-free sentences are frequent.\nA few errors in grammar may persist, but these do not impede communication.",
                    "band6": "A mix of simple and complex sentence forms is used but flexibility is limited.\nExamples of more complex structures are not marked by the same level of accuracy as in simple structures.\nErrors in grammar and punctuation occur, but rarely impede communication.",
                    "band5": "The range of structures is limited and rather repetitive.\nAlthough complex sentences are attempted, they tend to be faulty, and the greatest accuracy is achieved on simple sentences.\nGrammatical errors may be frequent and cause some difficulty for the reader.\nPunctuation may be faulty.",
                    "band4": "A very limited range of structures is used.\nSubordinate clauses are rare and simple sentences predominate.\nSome structures are produced accurately but grammatical errors are frequent and may impede meaning.\nPunctuation is often faulty or inadequate.",
                    "band3": "Sentence forms are attempted, but errors in grammar and punctuation predominate (except in memorised phrases or those taken from the input material). This prevents most meaning from coming through.\nLength may be insufficient to provide evidence of control of sentence forms.",
                    "band2": "There is little or no evidence of sentence forms (except in memorised phrases).",
                    "band1": "Responses of 20 words or fewer are rated at Band 1.\nNo rateable language is evident.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                }
            },
            "task1": {
                "taskAchievement": {
                    "band9": "All the requirements of the task are fully and appropriately satisfied.\nThere may be extremely rare lapses in content.",
                    "band8": "The response covers all the requirements of the task appropriately, relevantly and sufficiently.\nKey features are skilfully selected, and clearly presented, highlighted and illustrated.\nThere may be occasional omissions or lapses in content.",
                    "band7": "The response covers the requirements of the task.\nThe content is relevant and accurate – there may be a few omissions or lapses.\nThe format is appropriate.\nKey features which are selected are covered and clearly highlighted but could be more fully or more appropriately illustrated or extended.\nIt presents a clear overview, the data are appropriately categorised, and main trends or differences are identified.",
                    "band6": "The response focuses on the requirements of the task and an appropriate format is used.\nKey features which are selected are covered and adequately highlighted. A relevant overview is attempted. Information is appropriately selected and supported using figures/data.\nSome irrelevant, inappropriate or inaccurate information may occur in areas of detail or when illustrating or extending the main points.\nSome details may be missing (or excessive) and further extension or illustration may be needed.",
                    "band5": "The response generally addresses the requirements of the task. The format may be inappropriate in places. (Academic) Key features which are selected are not adequately covered.\nThe recounting of detail is mainly mechanical. There may be no data to support the description.\nThe purpose may be unclear at times. The tone may be variable and sometimes inappropriate.\nThere may be a tendency to focus on details (without referring to the bigger picture).\nThe inclusion of irrelevant, inappropriate or inaccurate material in key areas detracts from the task achievement.\nThere is limited detail when extending and illustrating the main points.",
                    "band4": "The response is an attempt to address the task.\nFew key features have been selected.\nThe format may be inappropriate.\nKey features/bullet points which are presented may be irrelevant, repetitive, inaccurate or inappropriate.",
                    "band3": "The response does not address the requirements of the task (possibly because of misunderstanding of the data/diagram/situation).\nKey features/bullet points which are presented may be largely irrelevant.\nLimited information is presented, and this may be used repetitively.",
                    "band2": "The content barely relates to the task.",
                    "band1": "Responses of 20 words or fewer are rated at Band 1.\nThe content is wholly unrelated to the task.\nAny copied rubric must be discounted.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                },
                "coherenceAndCohesion": {
                    "band9": "The message can be followed effortlessly.\nCohesion is used in such a way that it very rarely attracts attention.\nAny lapses in coherence or cohesion are minimal.\nParagraphing is skilfully managed.",
                    "band8": "The message can be followed with ease.\nInformation and ideas are logically sequenced, and cohesion is well managed.\nOccasional lapses in coherence or cohesion may occur.\nParagraphing is used sufficiently and appropriately.",
                    "band7": "Information and ideas are logically organised and there is a clear progression throughout the response. A few lapses may occur.\nA range of cohesive devices including reference and substitution is used flexibly but with some inaccuracies or some over/under use.",
                    "band6": "Information and ideas are generally arranged coherently and there is a clear overall progression.\nCohesive devices are used to some good effect but cohesion within and/or between sentences may be faulty or mechanical due to misuse, overuse or omission.\nThe use of reference and substitution may lack flexibility or clarity and result in some repetition or error",
                    "band5": "Organisation is evident but is not wholly logical and there may be a lack of overall progression. Nevertheless, there is a sense of underlying coherence to the response.\nThe relationship of ideas can be followed but the sentences are not fluently linked to each other.\nThere may be limited/overuse of cohesive devices with some inaccuracy.\nThe writing may be repetitive due to inadequate and/or inaccurate use of reference and substitution.",
                    "band4": "Information and ideas are evident but not arranged coherently, and there is no clear progression within the response.\nRelationships between ideas can be unclear and/or inadequately marked. There is some use of basic cohesive devices, which may be inaccurate or repetitive.\nThere is inaccurate use or a lack of substitution or referencing.",
                    "band3": "There is no apparent logical organisation.\nIdeas are discernible but difficult to relate to each other.\nMinimal use of sequencers or cohesive devices. Those used do not necessarily indicate a logical relationship between ideas.\nThere is difficulty in identifying referencing.",
                    "band2": "There is little relevant message, or the entire response may be off-topic.\nThere is little evidence of control of organisational features.",
                    "band1": "Responses of 20 words or fewer are rated at Band 1.\nThe writing fails to communicate any message and appears to be by a virtual non-writer.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                },
                "lexicalResource": {
                    "band9": "Full flexibility and precise use are evident within the scope of the task.\nA wide range of vocabulary is used accurately and appropriately with very natural and sophisticated control of lexical features.\nMinor errors in spelling and word formation are extremely rare and have minimal impact on communication.",
                    "band8": "A wide resource is fluently and flexibly used to convey precise meanings within the scope of the task.\nThere is skilful use of uncommon and/or idiomatic items when appropriate, despite occasional inaccuracies in word choice and collocation.\nOccasional errors in spelling and/or word formation may occur, but have minimal impact on communication.",
                    "band7": "The resource is sufficient to allow some flexibility and precision.\nThere is some ability to use less common and/or idiomatic items.\nAn awareness of style and collocation is evident, though inappropriacies occur.\nThere are only a few errors in spelling and/or word formation, and they do not detract from overall clarity.",
                    "band6": "The resource is generally adequate and appropriate for the task.\nThe meaning is generally clear in spite of a rather restricted range or a lack of precision in word choice.\nIf the writer is a risk-taker, there will be a wider range of vocabulary used but higher degrees of inaccuracy or inappropriacy.\nThere are some errors in spelling and/or word formation, but these do not impede communication.",
                    "band5": "The resource is limited but minimally adequate for the task.\nSimple vocabulary may be used accurately but the range does not permit much variation in expression.\nThere may be frequent lapses in the appropriacy of word choice, and a lack of flexibility is apparent in frequent simplifications and/or repetitions.\nErrors in spelling and/or word formation may be noticeable and may cause some difficulty for the reader.",
                    "band4": "The resource is limited and inadequate for or unrelated to the task. Vocabulary is basic and may be used repetitively.\nThere may be inappropriate use of lexical chunks (e.g. memorised phrases, formulaic language and/or language from the input material).\nInappropriate word choice and/or errors in word formation and/or in spelling may impede meaning.",
                    "band3": "The resource is inadequate (which may be due to the response being significantly underlength).\nPossible over-dependence on input material or memorised language.\nControl of word choice and/or spelling is very limited, and errors predominate. These errors may severely impede meaning.",
                    "band2": "The resource is extremely limited with few recognisable strings, apart from memorised phrases.\nThere is no apparent control of word formation and/or spelling.",
                    "band1": "Responses of 20 words or fewer are rated at\nBand 1.\nNo resource is apparent, except for a few isolated words.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                },
                "grammaticalRangeAndAccuracy": {
                    "band9": "A wide range of structures within the scope of the task is used with full flexibility and control.\nPunctuation and grammar are used appropriately throughout.\nMinor errors are extremely rare and have minimal impact on communication",
                    "band8": "A wide range of structures within the scope of the task is flexibly and accurately used.\nThe majority of sentences are error-free, and punctuation is well managed.\nOccasional, non-systematic errors and inappropriacies occur, but have minimal impact on communication.",
                    "band7": "A variety of complex structures is used with some flexibility and accuracy.\nGrammar and punctuation are generally well controlled, and error-free sentences are frequent.\nA few errors in grammar may persist, but these do not impede communication.",
                    "band6": "A mix of simple and complex sentence forms is used but flexibility is limited.\nExamples of more complex structures are not marked by the same level of accuracy as in simple structures.\nErrors in grammar and punctuation occur, but rarely impede communication",
                    "band5": "The range of structures is limited and rather repetitive.\nAlthough complex sentences are attempted, they tend to be faulty, and the greatest accuracy is achieved on simple sentences.\nGrammatical errors may be frequent and cause some difficulty for the reader.\nPunctuation may be faulty.",
                    "band4": "A very limited range of structures is used.\nSubordinate clauses are rare and simple sentences predominate.\nSome structures are produced accurately but grammatical errors are frequent and may impede meaning.\nPunctuation is often faulty or inadequate.",
                    "band3": "Sentence forms are attempted, but errors in grammar and punctuation predominate (except in memorised phrases or those taken from the input material). This prevents most meaning from coming through.\nLength may be insufficient to provide evidence of control of sentence forms.",
                    "band2": "There is little or no evidence of sentence forms (except in memorised phrases).",
                    "band1": "Responses of 20 words or fewer are rated at Band 1.\nNo rateable language is evident.",
                    "band0": "Should only be used where a candidate did not attend or attempt the question in any way, used a language other than English throughout, or where there is proof that a candidate’s answer has been totally memorised."
                }
            }
        }
    },
    EVALUATION_CRITERIA: {
        'task1': `
- Accurate data selection and comparison
- Clear overview of main trends
- Data presentation and progression
- Appropriate use of language for data description`,
    'task2': `
- Clear position throughout
- Main ideas fully developed
- Relevant examples and evidence
- Logical argument progression`
    },
    MAX_QUESTION_WORD_COUNT: 100,
    MAX_ESSAY_WORD_COUNT: {
        'Writing Task 1': 300,
        'Writing Task 2': 500
    },
    MIN_ESSAY_WORD_COUNT: {
        'Writing Task 1': 150,
        'Writing Task 2': 250
    },
    COST_PER_1K_TOKENS: {
        prompt: 0.03,
        completion: 0.06
    }
}

module.exports = constant;