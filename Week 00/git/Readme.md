## Welcome to Git and GitHub at ChaiCode Cohort!

**Introduction**
```
Welcome to ChaiCode Cohort! This guide is designed to help you get started with Git and GitHub, essential tools for managing and collaborating on code effectively. At ChaiCode, we use Git to track changes and GitHub for seamless team collaboration. This document will walk you through everything from setting up your environment to contributing to our codebase confidently.
```

## Basics of Git and GitHub

**What is Git?**

```
Git is a version control system that helps developers manage changes in their code. It ensures every change is tracked, and you can revert to earlier versions if needed. 
```

**What is GitHub?**
```
GitHub is a cloud-based hosting platform for Git repositories. It enables team collaboration by providing tools for code reviews, version control, and project management.
```

## **Configure Git**
Run the following commands in your terminal to set up your user name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Create a GitHub Account

1. Visit GitHub.com
2. Click **Sign Up** and follow the instructions.

----------
## Cloning the ChaiCode Repository
1. Navigate to the repository URL provided by ChaiCode.
2. Run the following command to clone the repository:
bash
Copy code

```bash
git clone https://github.com/ChaiCode/example-repo.git
```
3. Navigate into the folder:
bash
Copy code

```bash 
cd example-repo
```

## Basic Git commands
Here are some commonly used Git commands:

| Command | Description|
|---|----|
|`git status`| Check the current status of the repository.|
|`git add <file>`| Stage changes for commit.|
|`git commit -m "message"`|Commit staged changes with a message.|
|`git push`|Push changes to the remote repository.|
|`git pull`|Fetch and merge changes from the remote repo.|
|`git log`|View the commit history|

----------

## Commit Message Rules

- Use the present tense(e.g., "Add feature").
- Capitalize the First Letter.
- Limit to **30 characters or less.
- Use prefixes like :

    - `feat:` for new features.
    - `fix:` for bug fixes.
    - `docs:` for documentation changes

### Examples:

```bash
feat: Add tea selection feature
fix: Resolve login issue for tea enthusiasts
docs: Update README with chai varieties
```
----------

## Branching Workflow
**Branching Strategy**

- Main: Stable, production-ready code.
- Development: Latest updates and merged features.
- Feature: Individual feature development.

**Create and Switch Branches**

```bash 
git branch feature/tea-menu
git checkout feature/tea-menu
```

**Merge and Resolve Conflixts**
1. Switch to the `development` Branche

```bash 
git checkout development 
```
2. Merge the feature branch:

```bash 
git merge feature/tea-menu
```
----------

### Pull Requests 
1. Push your feature branch to GitHub:

```bash 
git push origin feature/tea-menu
```
2. On GitHub, create a pull request from `feature/tea-menu` to `development`.
3. Add a clear description of changes and request a code review.
----------

## Deliverables
1. README.md:
    - Contains all steps above with screenshots embedded.

2. GitHub Repository:
    - At least 5 meaningful commits.
    - A sample branch `(feature/tea-menu)` created and merged.
    - One pull request showing the workflow.