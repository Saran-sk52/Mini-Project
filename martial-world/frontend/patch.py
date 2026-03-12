import os
import glob
import re

files = ['karate.html', 'kungfu.html', 'taekwondo.html', 'muaythai.html', 'mma.html', 'boxing.html', 'kickboxing.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()

    # Step 1: Add currentUser to updateSyllabus
    if "const currentUser = localStorage.getItem('currentUser') || 'guest';" not in content:
        content = re.sub(
            r'function updateSyllabus\(\) \{',
            r"function updateSyllabus() {\n      const currentUser = localStorage.getItem('currentUser') || 'guest';",
            content
        )
    
    # Step 2: Update checkboxId
    content = re.sub(
        r'const checkboxId = `\$\{belt\}-\$\{monthIndex\}-day\$\{day\}-goal\$\{goalIndex\}`;',
        r'const checkboxId = `${currentUser}-${belt}-${monthIndex}-day${day}-goal${goalIndex}`;',
        content
    )
    
    # Step 3: Update noteId
    content = re.sub(
        r'const noteId = `\$\{belt\}-\$\{monthIndex\}-day\$\{day\}-note`;',
        r'const noteId = `${currentUser}-${belt}-${monthIndex}-day${day}-note`;',
        content
    )

    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Patching complete.")
