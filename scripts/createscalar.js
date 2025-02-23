#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

// Helper: perform case-preserving replacement of target with replacement
function preserveCaseReplace(text, target, replacement) {
  const regex = new RegExp(target, 'gi');
  return text.replace(regex, (match) => {
    if (match === match.toUpperCase()) {
      return replacement.toUpperCase();
    } else if (match === match.toLowerCase()) {
      return replacement.toLowerCase();
    } else if (match[0] === match[0].toUpperCase() &&
               match.slice(1) === match.slice(1).toLowerCase()) {
      return replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
    } else {
      return replacement;
    }
  });
}

// Prompt user with a question and return the answer
async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Main function
(async () => {
  try {
    // Ask for the package name
    const packageName = await prompt("Enter the package name (pname): ");
    if (!packageName) {
      console.error("No package name provided. Exiting.");
      process.exit(1);
    }
    // Verify package exists (assuming packages are located at root/packages)
    const packageDir = path.resolve(__dirname, '..', 'packages', packageName);
    try {
      const stat = await fs.stat(packageDir);
      if (!stat.isDirectory()) throw new Error();
    } catch {
      console.error(`Package directory not found at ${packageDir}. Exiting.`);
      process.exit(1);
    }

    // Ask for the component set name
    const componentName = await prompt("Enter the component set name (cname): ");
    if (!componentName) {
      console.error("No component set name provided. Exiting.");
      process.exit(1);
    }
    // Check if the package's src directory contains a directory named componentName
    const componentDir = path.resolve(packageDir, 'src', componentName);
    try {
      const stat = await fs.stat(componentDir);
      if (!stat.isDirectory()) throw new Error();
    } catch {
      console.error(`Component directory not found at ${componentDir}. Exiting.`);
      process.exit(1);
    }

    // Ask for the Scalar name
    const scalarName = await prompt("Enter the Scalar name (sname): ");
    if (!scalarName) {
      console.error("No scalar name provided. Exiting.");
      process.exit(1);
    }

    // Build source file path: it should be in the component directory and named "{cname}ScalarAttribute.jsx"
    const sourceFileName = `${componentName}ScalarAttribute.jsx`;
    const sourceFilePath = path.join(componentDir, "Scalars", sourceFileName);
    try {
      await fs.access(sourceFilePath);
    } catch {
      console.error(`Source file ${sourceFilePath} does not exist. Exiting.`);
      process.exit(1);
    }

    // Build destination file path: "{cname}{sname}Attrbibute.jsx" inside the same directory.
    const destFileName = `${componentName}${scalarName}Attrbibute.jsx`;
    const destFilePath = path.join(componentDir, "Scalars", destFileName);

    // Read the source file, replace "Scalar" with scalarName (preserving case), and write to the destination.
    let content = await fs.readFile(sourceFilePath, 'utf8');
    const newContent = preserveCaseReplace(content, "Scalar", scalarName);
    await fs.writeFile(destFilePath, newContent, 'utf8');

    console.log(`Created file ${destFilePath} with updated scalar name.`);
  } catch (err) {
    console.error("Error:", err);
  }
})();
