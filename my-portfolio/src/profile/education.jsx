export function setEd(img1, img2, img3) {
    const education = [
        {
            "title": "Sep. 2021 - Jun 2023",
            "cardTitle": "M.S., Computer Science",
            "cardSubtitle":"University of California, Los Angeles",
            "cardDetailedText": "GPA - 3.6",
            "media": {
                "name": "UCLA LOGO",
                "source": {
                    "url": img1
                },
                "type": "IMAGE"
            }
        },
        {
            "title": "Aug 2016 - May 2020",
            "cardTitle": "B.S., Computer Science",
            "cardSubtitle":"California State University, Los Angeles",
            "cardDetailedText": "GPA - 3.9",
            "media": {
                "name": "CSULA LOGO",
                "source": {
                    "url": img2
                },
                "type": "IMAGE"
            }
        }, 
        {
            "title": "Aug 2013 - May 2016",
            "cardTitle": "High School Diploma",
            "cardSubtitle":"Mark Keppel High School",
            "cardDetailedText": "GPA - 3.8",
            "media": {
                "name": "Mark Keppel LOGO",
                "source": {
                    "url": img3
                },
                "type": "IMAGE"
            }
        }
    ];

    return education;
}