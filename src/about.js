const about = (() => {
    const showAbout = () => {

        const content = document.querySelector('#content');
        const about = document.createElement('div');
        about.classList.add("about")// about body
        content.appendChild(about); 
//-----------------------------------------Contact
        const contact = document.createElement('div');
        contact.classList.add('contact')
        const contactTitle = document.createElement('div');
        contactTitle.classList.add("title");
        contactTitle.textContent = "Contact Us";
        about.appendChild(contact);
        contact.appendChild(contactTitle); // contact and contact title

        const contactBody = document.createElement('div');
        contactBody.classList.add('contact-body');
        const contactBodyTel = document.createElement('div');
        contactBodyTel.textContent = "000 558 886 9988";
        const contactBodyEmail = document.createElement('div');
        contactBodyEmail.textContent = "info@libero.com";
        const contactBodyAddress = document.createElement('div');
        contactBodyAddress.textContent = "5145, Magnolia St."
        contactBody.append(contactBodyTel, contactBodyEmail, contactBodyAddress);
        contact.appendChild(contactBody); // contact content
//-------------------------------------------Contact
//-------------------------------------------WorkingHours
        const workingHours = document.createElement('div');
        const workingHoursTitle = document.createElement('div');
        const workingHoursBody = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');

        workingHoursTitle.classList.add('title');
        workingHoursBody.classList.add('working-hours-body')

        workingHoursTitle.textContent = "Working Hours";
        div1.textContent = "Mon - Fri: 07 am - 09 pm";
        div2.textContent = "Saturday: 08am - 09 pm";
        div3.textContent = "Sunday: Closed"

        workingHoursBody.append(div1,div2,div3);
        workingHours.append(workingHoursTitle,workingHoursBody);
        about.appendChild(workingHours);
//-------------------------------------------WorkingHours
        }
    return {showAbout};
})();

export { about };