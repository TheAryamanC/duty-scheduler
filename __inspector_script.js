// Add people here
const peopleData = [
  {
    name: "John Doe",
    email: "john@example.com",
    preferredDates: ["2026-03-20", "2026-03-25"], // Format: YYYY-MM-DD
    notPreferredDates: ["2026-03-21", "2026-03-22"]
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    preferredDates: ["2026-04-01"],
    notPreferredDates: ["2026-04-05", "2026-04-06"]
  }
  // add more
];


peopleData.forEach(person => {
  try {
    // Check if the person already exists in the scheduler
    const exists = window.scheduler.people.find(p => p.email.toLowerCase() === person.email.toLowerCase());
    
    // If they don't exist, add them first
    if (!exists) {
      window.scheduler.addPerson(person.name, person.email);
      console.log(`Added new member: ${person.name}`);
    } else {
      console.log(`Member ${person.name} already exists. Updating preferences instead.`);
    }

    // Apply their date preferences
    window.scheduler.setPreferences(
      person.email.toLowerCase(), 
      person.preferredDates || [], 
      person.notPreferredDates || []
    );
    console.log(`Successfully set preferences for ${person.name}`);
    
  } catch (error) {
    console.error(`Error processing ${person.name}:`, error.message);
  }
});

if (typeof saveSetup === 'function') {
  saveSetup();
}

if (typeof renderPeopleList === 'function') {
  renderPeopleList();
}

console.log("🎉 All done!");