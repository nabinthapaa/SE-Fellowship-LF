/**
 * @typedef {object} Education;
 * @property {string} name
 * @property {string} enrolledDate
 */
/**
 * @typedef {object} AboutMe
 * @property {string} name,
 * @property {string} email
 * @property {Array.<string>} interests
 * @property {Array.<Education>} education
 */
/**
 * @type {AboutMe} 
 */
const aboutme = {
    name: 'Nabin Thapa',
    email: 'erewhonaden23@gmail.com',
    interests: ['Gaming', 'Travel'],
    education: [
        {
            name: "Kathmandu Engineering College",
            enrolledDate: "2020"
        },
        {
            name: "Sunrise English School",
            enrolledDate: "2018"
        },
        {
            name: "Amar English School",
            enrolledDate: "2008"
        }
    ]
}

export default aboutme;