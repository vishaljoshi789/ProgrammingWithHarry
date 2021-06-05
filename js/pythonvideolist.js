let videolist = document.getElementById("video-list");
let vlist = {
    "Installing VS Code, Python & writing hello world Python code | Python Tutorial #1": { 'thumb': 'https://i.ytimg.com/vi/ks6wF_ooYqo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBUPO4YRXI4evALpqiAaqCHskch9Q', "videoid": "ks6wF_ooYqo" },
    "Variables & Comments in Python | Python Tutorial #2": { 'thumb': 'https://i.ytimg.com/vi/lOHF1WfpDaY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDfsCGOPtOkFRZ3Ei8qLaVLeZdwCQ', "videoid": "lOHF1WfpDaY" },
    "Numbers & Typecasting in python | Python Tutorial #3": { 'thumb': 'https://i.ytimg.com/vi/a5xyuIw96ww/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCZNxiGimzKfKUcYgnSfbCaYL_K6Q', "videoid": "a5xyuIw96ww" },
    "Operators in Python | Python Tutorial #4": { 'thumb': 'https://i.ytimg.com/vi/maIAaMbf7ag/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD5O723Xkw0gI-X4s2z-cAsemE7CA', "videoid": "maIAaMbf7ag" },
    "Python strings and built in string methods | Python Tutorial #5": { 'thumb': 'https://i.ytimg.com/vi/UcgCOpXTDjs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCYLYzehLZGBloPvqeSaF22cSxI1w', "videoid": "UcgCOpXTDjs" },
    "Exercise 1: Capitalize my name & String concatenation | Python Tutorial #6 ": { 'thumb': 'https://i.ytimg.com/vi/thZregq8x9I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDIKqXWD3v6dj6gr7Io3JpUXgvtiA', "videoid": "thZregq8x9I" },
    "F-strings in Python | Python Tutorial #7": { 'thumb': 'https://i.ytimg.com/vi/cKNNr1kqj-k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBg9hmPOAA2rAHAvXhNOR6hrvDirw', "videoid": "cKNNr1kqj-k" },
    "Taking user input in Python  | Python Tutorial #8 ": { 'thumb': 'https://i.ytimg.com/vi/qyXbDxMHhs4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB_OzaFWNnJSQfPK9nzq6BOSpNXQg', "videoid": "qyXbDxMHhs4" },
    "Lists in Python | Python Tutorial #9 ": { 'thumb': 'https://i.ytimg.com/vi/_oWVDNRkRKs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBnpe3vL7gy7Hb1Mw61eFMNrEq4Aw', "videoid": "_oWVDNRkRKs" },
    "Tuple in Python | Python Tutorial #10 ": { 'thumb': 'https://i.ytimg.com/vi/aVHNlC-cAjw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB2awnYwI5cvSpPJdviia9CHh5MBg', "videoid": "aVHNlC-cAjw" },
    "Dictionary and related methods in Python | Python Tutorial #11 ": { 'thumb': 'https://i.ytimg.com/vi/tT7iiYkeCPk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAqeftRplQHWaMzMXeTNhh4JAaQ3w', "videoid": "tT7iiYkeCPk" },
    "Sets in Python | Python Tutorial #12 ": { 'thumb': 'https://i.ytimg.com/vi/Avg_Gjsm7BI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCmaBPY74l2hNpyxGRh8xznSV2z4g', "videoid": "Avg_Gjsm7BI" },
    "If else conditionals in Python | Python Tutorial #13 ": { 'thumb': 'https://i.ytimg.com/vi/gQYMlDdahMY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAe2yguJCnN3CkuDFxiqxFXRdfoKg', "videoid": "gQYMlDdahMY" },
    "For Loops in python | Python Tutorial #14 ": { 'thumb': 'https://i.ytimg.com/vi/4A6FCmUfjyY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCykoxtPsdvQqMMu6hoGUSHKXgDiw', "videoid": "4A6FCmUfjyY" },
    "While Loops in python | Python Tutorial #15": { 'thumb': 'https://i.ytimg.com/vi/8Baiw_bwTwI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC3p-yZ4MocJby4SmuCWi-Vv8fv-g', "videoid": "8Baiw_bwTwI" },
    "Exercise 1: Solution + Shoutouts | Python Tutorial #16 ": { 'thumb': 'https://i.ytimg.com/vi/0YMl1MqMHOw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDwtLe1018Qex5Zvj5s3uin4Ikyyw', "videoid": "0YMl1MqMHOw" },
    "Functions in Python | Python Tutorial #17 ": { 'thumb': 'https://i.ytimg.com/vi/PfvQjwYg798/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAOWSbC-GnRzJQb-ymx7Cx5-Ppf3g', "videoid": "PfvQjwYg798" },
    "Exercise 2: Twinkle Twinkle Little Star | Python Tutorial #18": { 'thumb': 'https://i.ytimg.com/vi/ZZmCcASvYAs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDeUXF0ZjEHC-stPXdQPLS8_1CpMQ', "videoid": "ZZmCcASvYAs" },
    "Recursions in Python | Python Tutorial #19": { 'thumb': 'https://i.ytimg.com/vi/QPvkogmM3jA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCj6_yzB5Y-qWBIizM8f7OHnD3C6Q', "videoid": "QPvkogmM3jA" },
    "Modules & pip in Python | Python Tutorial #20": { 'thumb': 'https://i.ytimg.com/vi/8mM-oY2OD0k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC9vnkqk4B_CvqGFHXt8eMzX4KZww', "videoid": "8mM-oY2OD0k" },
    "For else in Python | Python Tutorial #21": { 'thumb': 'https://i.ytimg.com/vi/GRLKc5YdqMg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCop9WqVXXyjIR2kcxHEQjowYmffg', "videoid": "GRLKc5YdqMg" },
    "Try except and Error handling in Python | Python Tutorial #22": { 'thumb': 'https://i.ytimg.com/vi/P--ajCoYFiM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDAIUE8MLw_1c3W76z32z2P5wY0ZA', "videoid": "P--ajCoYFiM" },
    "Exercise 2: Solution + Shoutouts | Python Tutorial #23": { 'thumb': 'https://i.ytimg.com/vi/wNXjVjRT8Ec/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAZ3N7zM9gb-hI7QiCo-qNE5RjoyA', "videoid": "wNXjVjRT8Ec" },
    "Short Hand If - Else Notation in Python | Python Tutorial #24": { 'thumb': 'https://i.ytimg.com/vi/4vsW0LimYh8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBVtzojFOhIwv4gnUIcuqJMP9h1IA', "videoid": "4vsW0LimYh8" },
    "Escape sequence characters in Python | Python Tutorial #25": { 'thumb': 'https://i.ytimg.com/vi/7g6mQnpOxgE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCir41rtD10nyuFS7hvAIWEjAYgdA', "videoid": "7g6mQnpOxgE" },
    "File Handling in Python | Python Tutorial #26": { 'thumb': 'https://i.ytimg.com/vi/63oykCokNak/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDHxnrjkSYUpKg_aH2bTii3Yv3_lQ', "videoid": "63oykCokNak" },
    "f.read(), f.readline() & f.readlines() in Python | Python Tutorial #27": { 'thumb': 'https://i.ytimg.com/vi/jBR5HnKfqCU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAAD9fbuIvWg96LHqQFjBah65zsQQ', "videoid": "jBR5HnKfqCU" },
    "Guess the number: Python Exercise 3 | Python Tutorial #28": { 'thumb': 'https://i.ytimg.com/vi/x4Rt-6lg1d0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAAVKmP9dtvoFpKsX0bLJtLFj_W8A', "videoid": "x4Rt-6lg1d0" },
    "Number Guessing Game: Python Exercise 3 Solution | Python Tutorial #29": { 'thumb': 'https://i.ytimg.com/vi/TXDWEwffQNw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDCduPKuqXBoGcMCwPWlPsHvzkWBw', "videoid": "TXDWEwffQNw" },
    "List Comprehensions In Python | Python Tutorial #30": { 'thumb': 'https://i.ytimg.com/vi/ADcuPqLLFWk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBezeH-SIv-0L_iC2JLC6-jABYSaw', "videoid": "ADcuPqLLFWk" },
    "Iterators, Iterables & Generators In Python | Python Tutorial #31": { 'thumb': 'https://i.ytimg.com/vi/YFsN4Y0Q7FI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCdP7ti5nTM2mT3s0jVs19bYGSVfg', "videoid": "YFsN4Y0Q7FI" },
    "Lambda Functions In Python | Python Tutorial #32": { 'thumb': 'https://i.ytimg.com/vi/wwXFXuRETdY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAgdiIm8adRVvIVK_S0MSTfu2fI0g', "videoid": "wwXFXuRETdY" },
    "Project 1: Jarvis - Python AI Virtual Desktop Assistant | Python Tutorial #33": { 'thumb': 'https://i.ytimg.com/vi/4k9CphTdnWE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDxZ4fOqEN9yUnIM4Sq6PB2P8LcQQ', "videoid": "4k9CphTdnWE" },
    "Object Oriented Programming - Classes & Objects in Python | Python Tutorial #34": { 'thumb': 'https://i.ytimg.com/vi/m53EEP5H6Sg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCcRR2YqZ7c2Vxhuyx1nAYWfBVuNA', "videoid": "m53EEP5H6Sg" }


}

getvideofun = videoid, key => {
    localStorage.clear()
    localStorage.setItem("videoid", videoid)
    localStorage.setItem("videotitle", key)
}

for (key in vlist) {
    videolist.innerHTML += `<div class="card d-flex">
    <div>
        <img class="card-img" style="width:100%;height:100%;border-radius: 0px;" src=${(vlist[key])['thumb']} alt="">
    </div>
    <div class="card-heading" style="margin:10px;">
        <h4>${key}</h4>
    </div>
    <a  href="python-video.html"id="watchbtn" ><button
            class="card-button" onclick="getvideofun('${(vlist[key])['videoid']}','${key}')">Watch</button></a>`
}