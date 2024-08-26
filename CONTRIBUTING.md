# Contributing Guidelines:

We welcome all contributions to the project. 

## Contribution workflow:

1. Check that there isn't about your idea to avoid duplicating work.
    * If there isn't one already, please create one so that others know you're working on it.


2. Clone the repository on your local machine.

 ```bash
 
 git clone https://github.com/SandyAbasman/Personal-finance-app.git
 
 ```
3. Pull latest update and branch

```bash
    git fetch 
    git pull origin staging
    
```
<br/> 

### Resolving issue:

4. Create a new branch from the staging branch with appriopriate name for the issue.

 ```bash
 
    git checkout -b <branch-name>
    
 ```

6. Make the necessary changes and additions / subtractions within the branch.

7. Add and commit changes made.

 ```bash
 
    git add .
    git commit -m "commit message"
    
 ```
8. Pull update from staging to sync with updated respository.

 ```bash
    git pull origin staging
    
 ```
9. Fix and conflict and push your push to respository

 ```bash
     git push origin <branch-name>

 ```
9. Submit a Pull Request against the `staging` branch and wait for the code to be reviewed and merged.

If you're not used to this workflow with git, you can start with some [basic docs from GitHub](https://help.github.com/articles/fork-a-repo/).
