const fs = require('fs');

const files = ['karate.html', 'kungfu.html', 'taekwondo.html', 'muaythai.html', 'mma.html', 'boxing.html', 'kickboxing.html'];

for (const f of files) {
    let content = fs.readFileSync(f, 'utf-8');

    // Step 1: Add currentUser to updateSyllabus
    if (!content.includes("const currentUser = localStorage.getItem('currentUser') || 'guest';")) {
        content = content.replace(
            /function updateSyllabus\(\) \{/,
            "function updateSyllabus() {\n      const currentUser = localStorage.getItem('currentUser') || 'guest';"
        );
    }

    // Step 2: Update checkboxId
    content = content.replace(
        /const checkboxId = `\$\{belt\}-\$\{monthIndex\}-day\$\{day\}-goal\$\{goalIndex\}`;/g,
        "const checkboxId = `${currentUser}-${belt}-${monthIndex}-day${day}-goal${goalIndex}`;"
    );

    // Step 3: Update noteId
    content = content.replace(
        /const noteId = `\$\{belt\}-\$\{monthIndex\}-day\$\{day\}-note`;/g,
        "const noteId = `${currentUser}-${belt}-${monthIndex}-day${day}-note`;"
    );

    fs.writeFileSync(f, content, 'utf-8');
}

console.log("Patching complete.");
